// src/app/admin/AdminDashboard.tsx
'use client';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation'; // Ensure correct import for new `app` directory
import useAuth from '../../hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '../loading';
import {
  Navbar, Container, Nav, Card, Row, Col, Table,
  Button, Form, InputGroup, ProgressBar
} from 'react-bootstrap';
import {
  FaPlane, FaHotel, FaHome, FaBuilding, FaUsers,
  FaChartLine, FaCalendarAlt, FaCog, FaSearch,
  FaBars
} from 'react-icons/fa';


const AdminDashboard = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    if (isAuthenticated !== undefined) {
      setLoading(false); // Set loading to false once authentication status is known
    }
  }, [isAuthenticated]);

  if (loading) {
    <Loading />// Show a loading indicator while checking authentication
  }
  return (
    isAuthenticated && user?.role === 'admin' ? (
      <>
        <div className="adminDashboard">
          <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="sidebarHeader d-flex flex-column">
              <Link className="navbar-logo-area d-flex align-items-center mb-4" href="/">
                <div className="navbar-logo"><Image src="/images/logo.png" alt="logo" width={4000} height={4000} quality={100} /></div>
                <div className="navbar-title">IMAGINE <br /> GROUP</div>
              </Link>

              <div className="userMenu">
                <Image src="/images/user.svg" alt="Admin" className="avatar" width={40} height={40} quality={100} />
                <span>Welcome, Admin</span>
              </div>
              <button className="closeSidebar" onClick={() => setSidebarOpen(false)}>
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/admin/dashboard" className="nav-link active">
                  <i className="bi bi-speedometer2 me-2"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/users" className="nav-link">
                  <i className="bi bi-people me-2"></i> Users
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/bookings" className="nav-link">
                  <i className="bi bi-calendar-check me-2"></i> Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/properties" className="nav-link">
                  <i className="bi bi-house-door me-2"></i> Properties
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/reports" className="nav-link">
                  <i className="bi bi-graph-up me-2"></i> Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/settings" className="nav-link">
                  <i className="bi bi-gear me-2"></i> Settings
                </Link>
              </li>
              <li className="nav-item">   <button className="nav-link" onClick={logout}>Logout</button></li>
            </ul>
          </nav>

          <main className="content">
            <header className="header position-fixed top-0 py-3">
              <h3 className="mb-0 lh-1">Dashboard</h3>
              <button className="sidebarToggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <FaBars />
              </button>
            </header>

            <div className="content-container py-4">
              <Container>
                <Row className="mb-4">
                  <Col md={6} lg={3} className="mb-4">
                    <Card className="h-100">
                      <Card.Body>
                        <Card.Title>Total Bookings</Card.Title>
                        <Card.Text className="display-4">1,234</Card.Text>
                        <ProgressBar now={75} label={`75%`} className="mt-2" />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} lg={3} className="mb-4">
                    <Card className="h-100">
                      <Card.Body>
                        <Card.Title>Properties Listed</Card.Title>
                        <Card.Text className="display-4">567</Card.Text>
                        <ProgressBar now={60} label={`60%`} className="mt-2" />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} lg={3} className="mb-4">
                    <Card className="h-100">
                      <Card.Body>
                        <Card.Title>Total Revenue</Card.Title>
                        <Card.Text className="display-4">$89,234</Card.Text>
                        <ProgressBar now={80} label={`80%`} className="mt-2" />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} lg={3} className="mb-4">
                    <Card className="h-100">
                      <Card.Body>
                        <Card.Title>Active Users</Card.Title>
                        <Card.Text className="display-4">5,678</Card.Text>
                        <ProgressBar now={65} label={`65%`} className="mt-2" />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <Row className="mb-4">
                  <Col lg={8} className="mb-4">
                    <Card>
                      <Card.Header>Recent Bookings</Card.Header>
                      <Card.Body>
                        <Table striped bordered hover responsive>
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Customer</th>
                              <th>Service</th>
                              <th>Date</th>
                              <th>Amount</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>John Doe</td>
                              <td>Tour Package</td>
                              <td>2023-06-15</td>
                              <td>$1,200</td>
                              <td><span className="badge bg-success">Confirmed</span></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Jane Smith</td>
                              <td>Property Viewing</td>
                              <td>2023-06-14</td>
                              <td>$50</td>
                              <td><span className="badge bg-warning">Pending</span></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Bob Johnson</td>
                              <td>Hotel Booking</td>
                              <td>2023-06-13</td>
                              <td>$500</td>
                              <td><span className="badge bg-info">In Progress</span></td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Alice Brown</td>
                              <td>Property Purchase</td>
                              <td>2023-06-12</td>
                              <td>$250,000</td>
                              <td><span className="badge bg-danger">Cancelled</span></td>
                            </tr>
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} className="mb-4">
                    <Card className="h-100">
                      <Card.Header>Quick Actions</Card.Header>
                      <Card.Body>
                        <div className="d-grid gap-2">
                          <Button variant="primary" size="lg">
                            <FaPlane className="me-2" /> Add New Tour
                          </Button>
                          <Button variant="secondary" size="lg">
                            <FaHome className="me-2" /> List New Property
                          </Button>
                          <Button variant="info" size="lg">
                            <FaUsers className="me-2" /> Manage Users
                          </Button>
                          <Button variant="warning" size="lg">
                            <FaChartLine className="me-2" /> View Reports
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <Row className="mb-4">
                  <Col md={6} className="mb-4">
                    <Card>
                      <Card.Header>Tour & Travels Overview</Card.Header>
                      <Card.Body>
                        <Row>
                          <Col xs={6} className="mb-3">
                            <h5><FaPlane className="me-2" /> Active Tours</h5>
                            <p className="h3">24</p>
                          </Col>
                          <Col xs={6} className="mb-3">
                            <h5><FaHotel className="me-2" /> Hotel Partners</h5>
                            <p className="h3">89</p>
                          </Col>
                          <Col xs={6} className="mb-3">
                            <h5><FaCalendarAlt className="me-2" /> Upcoming Tours</h5>
                            <p className="h3">12</p>
                          </Col>
                          <Col xs={6} className="mb-3">
                            <h5><FaUsers className="me-2" /> Tour Guides</h5>
                            <p className="h3">45</p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={6} className="mb-4">
                    <Card>
                      <Card.Header>Property & Real Estate Overview</Card.Header>
                      <Card.Body>
                        <Row>
                          <Col xs={6} className="mb-3">
                            <h5><FaHome className="me-2" /> Listed Properties</h5>
                            <p className="h3">567</p>
                          </Col>
                          <Col xs={6} className="mb-3">
                            <h5><FaBuilding className="me-2" /> Property Types</h5>
                            <p className="h3">8</p>
                          </Col>
                          <Col xs={6} className="mb-3">
                            <h5><FaUsers className="me-2" /> Active Agents</h5>
                            <p className="h3">34</p>
                          </Col>
                          <Col xs={6} className="mb-3">
                            <h5><FaCalendarAlt className="me-2" /> Scheduled Viewings</h5>
                            <p className="h3">28</p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <div className="row g-4 mb-4">
                  <div className="col-md-3 col-sm-6">
                    <div className="statCard card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Total Users</h5>
                        <p className="card-text display-4">1,234</p>
                        <p className="card-text text-success"><i className="bi bi-arrow-up"></i> 5.3%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="statCard card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Active Bookings</h5>
                        <p className="card-text display-4">56</p>
                        <p className="card-text text-danger"><i className="bi bi-arrow-down"></i> 2.1%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="statCard card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Total Properties</h5>
                        <p className="card-text display-4">789</p>
                        <p className="card-text text-success"><i className="bi bi-arrow-up"></i> 3.7%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="statCard card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Revenue</h5>
                        <p className="card-text display-4">$52K</p>
                        <p className="card-text text-success"><i className="bi bi-arrow-up"></i> 7.2%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="chartCard card">
                      <div className="card-body">
                        <h5 className="card-title">Bookings Overview</h5>
                        <div className="chart">
                          {/* Placeholder for chart */}
                          <Image src="/placeholder.svg?height=300&width=600" alt="Bookings Chart" className="img-fluid" width={4000} height={4000} quality={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="accordion-flushrecentActivityCard card">
                      <div className="card-body">
                        <h5 className="card-title">Recent Activity</h5>
                        <ul className="list-unstyled">
                          <li className="mb-3">
                            <strong>John Doe</strong> made a new booking
                            <small className="d-block text-muted">2 minutes ago</small>
                          </li>
                          <li className="mb-3">
                            <strong>Jane Smith</strong> updated their profile
                            <small className="d-block text-muted">1 hour ago</small>
                          </li>
                          <li className="mb-3">
                            <strong>New property</strong> added: Sunset Villa
                            <small className="d-block text-muted">3 hours ago</small>
                          </li>
                          <li className="mb-3">
                            <strong>Booking #1234</strong> was cancelled
                            <small className="d-block text-muted">5 hours ago</small>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </main>
        </div>
      </>
    ) : (
      notFound()
    )
  );

}
export default AdminDashboard;

// src/app/admin/AdminDashboard.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Ensure correct import for new `app` directory
import useAuth from '../../hooks/useAuth';
import Image from 'next/image';
import Head from 'next/head';
import {
    Navbar, Container, Nav, Card, Row, Col, Table,
    Button, Form, InputGroup, ProgressBar
} from 'react-bootstrap';
import {
    FaPlane, FaHotel, FaHome, FaBuilding, FaUsers,
    FaChartLine, FaCalendarAlt, FaCog, FaSearch
} from 'react-icons/fa';

const AdminDashboard = () => {
    const { isAuthenticated, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/signin'); // Redirect to login if not authenticated
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) return <p>Loading...</p>; // Show loading while checking auth

    return (

        <>
            <Head>
                <title>Admin Dashboard - Tour & Travels | Property & Real Estate</title>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                />
            </Head>

            <div className="admin-dashboard">
                <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                    <Container>
                        <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#tour-travels">Tour & Travels</Nav.Link>
                                <Nav.Link href="#property-realestate">Property & Real Estate</Nav.Link>
                                <button onClick={logout}>Logout</button>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#profile">
                                    <Image
                                        src="/placeholder.svg?height=32&width=32"
                                        alt="Admin"
                                        className="w-100 rounded-circle"
                                        width={100} height={100} quality={100}
                                    />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

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
                </Container>
            </div>
        </>
    );
}
export default AdminDashboard;

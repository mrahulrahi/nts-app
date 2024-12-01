// src/app/admin/AdminDashboard.tsx
'use client';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation'; // Ensure correct import for new `app` directory
import useAuth from '../../hooks/useAuth';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '../loading';
import { FaPlane, FaHotel, FaHome, FaBuilding, FaUsers, FaChartLine, FaCalendarAlt, FaBars } from 'react-icons/fa';
import { IoCalendarOutline, IoHomeOutline, IoLogInOutline, IoPeopleOutline, IoSettingsOutline, IoSpeedometerOutline, IoStatsChartOutline } from 'react-icons/io5';
import { AddModal } from '../../components/AddModal/AddModal';




const AdminDashboard = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [showModal, setshowModal] = useState(false);

  const [title, setTitle] = useState('');
  const [distance, setDistance] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [seat, setSeat] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    if (isAuthenticated !== undefined) {
      setLoading(false); // Set loading to false once authentication status is known
    }
  }, [isAuthenticated]);

  if (loading) {
    return <Loading /> // Show a loading indicator while checking authentication
  }

  // Check if the user has the 'admin' role
  if (!isAuthenticated || !user?.role?.includes('admin')) {
    return notFound(); // Redirect to not found page if user is not an admin
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = {
      img: image, // Add logic to handle images if needed
      title: title,
      duration: duration,
      price: price,
      location: location,
      seat: seat,
      distance: distance,
      type: type,
    };

    const response = await fetch('/api/admin/tours', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const newTour = await response.json();
      console.log('Tour created:', newTour);
      // Optionally, close the modal and refresh the list of tours
    } else {
      console.error('Error creating tour:', await response.json());
    }
  };



  return (
    isAuthenticated ? (
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
                  <IoSpeedometerOutline /> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/users" className="nav-link">
                  <IoPeopleOutline /> Users
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/bookings" className="nav-link">
                  <IoCalendarOutline /> Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/properties" className="nav-link">
                  <IoHomeOutline /> Properties
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/reports" className="nav-link">
                  <IoStatsChartOutline /> Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/settings" className="nav-link">
                  <IoSettingsOutline />Settings
                </Link>
              </li>
              <li className="nav-item">   <button className="nav-link" onClick={logout}> <IoLogInOutline /> Logout</button></li>
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
              <div className="container">
                <div className="row g-4">
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card h-100">
                      <div className="card-header"><h5>Total Bookings</h5></div>
                      <div className="card-body">
                        <p className="display-4">1,234</p>
                        <div className="progress mt-2">
                          <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card h-100">
                      <div className="card-header"><h5>Properties Listed</h5></div>
                      <div className="card-body">
                        <p className="display-4">567</p>
                        <div className="progress mt-2">
                          <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>60%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card h-100">
                      <div className="card-header"><h5>Total Revenue</h5></div>
                      <div className="card-body">
                        <p className="display-4">$89,234</p>
                        <div className="progress mt-2">
                          <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card h-100">
                      <div className="card-header"><h5>Active Users</h5></div>
                      <div className="card-body">
                        <p className="display-4">5,678</p>
                        <div className="progress mt-2">
                          <div className="progress-bar" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65%</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card h-100">
                      <div className="card-header"><h5>Total Users</h5></div>
                      <div className="card-body">
                        <p className="card-text display-4">1,234</p>
                        <p className="card-text text-success"><i className="bi bi-arrow-up"></i> 5.3%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card h-100">
                      <div className="card-header"><h5>Active Bookings</h5></div>
                      <div className="card-body">
                        <p className="card-text display-4">56</p>
                        <p className="card-text text-danger"><i className="bi bi-arrow-down"></i> 2.1%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card h-100">
                      <div className="card-header"><h5>Total Properties</h5></div>
                      <div className="card-body">
                        <p className="card-text display-4">789</p>
                        <p className="card-text text-success"><i className="bi bi-arrow-up"></i> 3.7%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xl-3">
                    <div className="card h-100">
                      <div className="card-header"><h5>Revenue</h5></div>
                      <div className="card-body">
                        <p className="card-text display-4">$52K</p>
                        <p className="card-text text-success"><i className="bi bi-arrow-up"></i> 7.2%</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="card">
                      <div className="card-header"><h5>Recent Bookings</h5></div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-striped table-bordered table-dark table-responsive">
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
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-header"><h5>Quick Actions</h5></div>
                      <div className="card-body">
                        <div className="d-grid gap-2">
                          <button className="btn btn-primary btn-lg" onClick={() => { setshowModal((prev) => !prev); }} >
                            <FaPlane className="me-2" /> Add New Tour
                          </button>
                          <div className="btn btn-secondary btn-lg">
                            <FaHome className="me-2" /> List New Property
                          </div>
                          <div className="btn btn-info btn-lg">
                            <FaUsers className="me-2" /> Manage Users
                          </div>
                          <div className="btn btn-warning btn-lg">
                            <FaChartLine className="me-2" /> View Reports
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card" >
                      <div className="card-header"><h5>Tour & Travels Overview</h5></div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-sm-6">
                            <h6><FaPlane className="me-2" /> Active Tours</h6>
                            <p className="h3">24</p>
                          </div>
                          <div className="col-sm-6">
                            <h6><FaHotel className="me-2" /> Hotel Partners</h6>
                            <p className="h3">89</p>
                          </div>
                          <div className="col-sm-6">
                            <h6><FaCalendarAlt className="me-2" /> Upcoming Tours</h6>
                            <p className="h3">12</p>
                          </div>
                          <div className="col-sm-6">
                            <h6><FaUsers className="me-2" /> Tour Guides</h6>
                            <p className="h3">45</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header"><h5>Property & Real Estate Overview</h5></div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-sm-6">
                            <h6><FaHome className="me-2" /> Listed Properties</h6>
                            <p className="h3">567</p>
                          </div>
                          <div className="col-sm-6">
                            <h6><FaBuilding className="me-2" /> Property Types</h6>
                            <p className="h3">8</p>
                          </div>
                          <div className="col-sm-6">
                            <h6><FaUsers className="me-2" /> Active Agents</h6>
                            <p className="h3">34</p>
                          </div>
                          <div className="col-sm-6">
                            <h6><FaCalendarAlt className="me-2" /> Scheduled Viewings</h6>
                            <p className="h3">28</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="card">
                      <div className="card-header"><h5>Bookings Overview</h5></div>
                      <div className="card-body">

                        <div className="chart">
                          <Image src="/images/image-1.jpg" alt="Bookings Chart" className="img-fluid" width={4000} height={4000} quality={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="accordion-flushrecentActivityCard card">
                      <div className="card-header"><h5>Recent Activity</h5></div>
                      <div className="card-body">
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
              </div>
            </div>
          </main >
        </div >


        <AddModal title='Add New Tour' buttonText='Add' closeButtonText='Close' shouldShow={showModal} onRequestClose={() => { setshowModal((prev) => !prev); }} onSubmit={handleSubmit}>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="category" className="form-label">Category Type</label>
                <select className="form-select" id="category" onChange={(e) => setType(e.target.value)}>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" required onChange={(e) => setTitle(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="distance" className="form-label">Distance</label>
                <input type="number" className="form-control" id="distance" required onChange={(e) => setDistance(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="number" className="form-control" id="price" required onChange={(e) => setPrice(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="text" className="form-control" id="image" onChange={(e) => setImage(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" required onChange={(e) => setLocation(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="duration" className="form-label">Duration</label>
                <input type="text" className="form-control" id="duration" required onChange={(e) => setDuration(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="seat" className="form-label">Seat</label>
                <input type="number" className="form-control" id="seat" required onChange={(e) => setSeat(e.target.value)} />
              </div>
            </div>
          </div>

        </AddModal>
      </>
    ) : (
      notFound()
    )
  );

}
export default AdminDashboard;
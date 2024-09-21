'use client'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from './AdminUserProfile.module.css'

export default function AdminUserProfile() {
  const [activeTab, setActiveTab] = useState('bookings')

  return (
    <>
      <Head>
        <title>Admin User Profile - Imagine Group</title>
        <meta name="description" content="Admin user profile for Imagine Group" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
      </Head>

      <div className={`${styles.adminProfile} container-fluid`}>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className={`${styles.userInfo} card mb-4`}>
              <div className="card-body text-center">
                <Image
                  src="/placeholder.svg"
                  alt="User Avatar"
                  width={120}
                  height={120}
                  className={`${styles.avatar} rounded-circle mb-3`}
                />
                <h2 className="card-title mb-0">John Doe</h2>
                <p className={`${styles.memberStatus} card-text`}>Premium Member</p>
                <ul className="list-group list-group-flush text-start mt-4">
                  <li className="list-group-item">
                    <i className="bi bi-envelope me-2"></i> john.doe@example.com
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-telephone me-2"></i> +1 234 567 890
                  </li>
                  <li className="list-group-item">
                    <i className="bi bi-geo-alt me-2"></i> New York, USA
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <ul className="nav nav-tabs mb-4">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'bookings' ? 'active' : ''}`}
                  href="#"
                  onClick={() => setActiveTab('bookings')}
                >
                  Bookings
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'details' ? 'active' : ''}`}
                  href="#"
                  onClick={() => setActiveTab('details')}
                >
                  User Details
                </a>
              </li>
            </ul>

            {activeTab === 'bookings' && (
              <div className={`${styles.bookings} card`}>
                <div className="card-body">
                  <h3 className="card-title mb-4">Recent Bookings</h3>
                  {[1, 2, 3].map((booking) => (
                    <div key={booking} className={`${styles.booking} mb-4 pb-3 border-bottom`}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h4 className="mb-1">Booking #{booking}</h4>
                          <p className="mb-1">Property: Luxury Villa</p>
                          <p className="mb-0 text-muted">
                            <i className="bi bi-calendar-event me-2"></i>
                            Check-in: 01/0{booking}/2024
                          </p>
                        </div>
                        <button className="btn btn-outline-primary">View Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className={`${styles.userDetails} card`}>
                <div className="card-body">
                  <h3 className="card-title mb-4">User Details</h3>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <input type="text" className="form-control" id="fullName" defaultValue="John Doe" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input type="tel" className="form-control" id="phone" defaultValue="+1 234 567 890" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">Address</label>
                      <input type="text" className="form-control" id="address" defaultValue="123 Main St, New York, NY 10001" />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-pencil-square me-2"></i>
                      Update Profile
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
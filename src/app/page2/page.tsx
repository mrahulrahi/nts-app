'use client'
import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from './AdminDashboard.module.css'

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Admin Dashboard - Imagine Group</title>
        <meta name="description" content="Admin dashboard for Imagine Group" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
      </Head>

      <div className={styles.adminDashboard}>
        <nav className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
          <div className={styles.sidebarHeader}>
            <h3>Imagine Group</h3>
            <button className={styles.closeSidebar} onClick={() => setSidebarOpen(false)}>
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
          </ul>
        </nav>

        <main className={styles.content}>
          <header className={styles.header}>
            <button className={styles.sidebarToggle} onClick={() => setSidebarOpen(!sidebarOpen)}>
              <i className="bi bi-list"></i>
            </button>
            <div className={styles.userMenu}>
              <span>Welcome, Admin</span>
              <Image src="/placeholder.svg" alt="Admin" className={styles.avatar} width={4000} height={4000} quality={100} />
            </div>
          </header>

          <div className="container-fluid py-4">
            <h1 className="mb-4">Dashboard</h1>

            <div className="row g-4 mb-4">
              <div className="col-md-3 col-sm-6">
                <div className={`${styles.statCard} card h-100`}>
                  <div className="card-body">
                    <h5 className="card-title">Total Users</h5>
                    <p className="card-text display-4">1,234</p>
                    <p className="card-text text-success"><i className="bi bi-arrow-up"></i> 5.3%</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className={`${styles.statCard} card h-100`}>
                  <div className="card-body">
                    <h5 className="card-title">Active Bookings</h5>
                    <p className="card-text display-4">56</p>
                    <p className="card-text text-danger"><i className="bi bi-arrow-down"></i> 2.1%</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className={`${styles.statCard} card h-100`}>
                  <div className="card-body">
                    <h5 className="card-title">Total Properties</h5>
                    <p className="card-text display-4">789</p>
                    <p className="card-text text-success"><i className="bi bi-arrow-up"></i> 3.7%</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className={`${styles.statCard} card h-100`}>
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
                <div className={`${styles.chartCard} card`}>
                  <div className="card-body">
                    <h5 className="card-title">Bookings Overview</h5>
                    <div className={styles.chart}>
                      {/* Placeholder for chart */}
                      <Image src="/placeholder.svg?height=300&width=600" alt="Bookings Chart" className="img-fluid" width={4000} height={4000} quality={100} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className={`${styles.recentActivityCard} card`}>
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
          </div>
        </main>
      </div>
    </>
  )
}
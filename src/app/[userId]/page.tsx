'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useAuth from '../../hooks/useAuth'; // Adjust the import path as necessary
import './UserProfile.css';

export default function UserProfile() {
    const { isAuthenticated, logout, user } = useAuth();
    const [activeTab, setActiveTab] = useState('bookings');
    const [userDetails, setUserDetails] = useState(null); // State to store user details
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: ''
    });
    const router = useRouter();

    useEffect(() => {
        if (user) {
            // Fetch user details
            fetch(`/api/${user.username}`)
                .then(response => response.json())
                .then(data => {
                    setUserDetails(data);
                    setFormData({
                        fullName: data.fullName || '',
                        email: data.email || '',
                        phone: data.phone || '',
                        address: data.address || ''
                    });
                })
                .catch(error => console.error('Error fetching user details:', error));
        }
    }, [user, router]);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            if (!user) {
                throw new Error('User is not authenticated');
            }
            const response = await fetch(`/api/${user.username}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                setUserDetails(updatedUser);
                alert('Profile updated successfully!');
            } else {
                const errorData = await response.json();
                alert(`Update failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <>
        <div className="content-container bg-pattern-dark">
        <div className="adminProfile container-fluid pt-5 position-relative z-3">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="userInfo card mb-4">
                            <div className="card-body text-center">
                                <Image
                                    src="/images/user.svg"
                                    alt="User Avatar"
                                    width={120}
                                    height={120}
                                    className="avatar rounded-circle mb-3"
                                />
                                <h2 className="card-title mb-0">{(userDetails as any)?.fullName || 'User'}</h2>
                                <p className="memberStatus card-text">Premium Member</p>
                                <ul className="list-group list-group-flush text-start mt-4">
                                    <li className="list-group-item">
                                        <i className="bi bi-envelope me-2"></i> {(userDetails as any)?.email || 'Email not available'}
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-telephone me-2"></i> {(userDetails as any)?.phone || 'Phone not available'}
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-geo-alt me-2"></i> {(userDetails as any)?.address || 'Address not available'}
                                    </li>
                                </ul>
                                <div className="logout-button mt-5"><button className="btn btn-default" onClick={logout}>Logout</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <ul className="nav nav-tabs mb-4">
                            <li className="nav-item">
                                <a
                                    className="nav-link ${activeTab === 'bookings' ? 'active' : ''}"
                                    href="#"
                                    onClick={() => setActiveTab('bookings')}
                                >
                                    Bookings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link ${activeTab === 'details' ? 'active' : ''}"
                                    href="#"
                                    onClick={() => setActiveTab('details')}
                                >
                                    User Details
                                </a>
                            </li>
                        </ul>

                        {activeTab === 'bookings' && (
                            <div className="bookings card">
                                <div className="card-body">
                                    <h3 className="card-title mb-4">Recent Bookings</h3>
                                    {[1, 2, 3].map((booking) => (
                                        <div key={booking} className="booking mb-4 pb-3 border-bottom">
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
                            <div className="userDetails card">
                                <div className="card-body">
                                    <h3 className="card-title mb-4">User Details</h3>
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="fullName" className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="fullName"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="phone" className="form-label">Phone</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                            />
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
        </div>
        </>
    );
}
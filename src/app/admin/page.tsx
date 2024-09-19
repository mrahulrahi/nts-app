'use client';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const AdminPage = () => {
    const { isAuthenticated, logout } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            // Redirect or show loading
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) return <p>Loading...</p>; // Render loading while checking auth

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default AdminPage;

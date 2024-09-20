// src/app/admin/AdminDashboard.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Ensure correct import for new `app` directory
import useAuth from '../../hooks/useAuth';

const AdminDashboard = () => {
    const { isAuthenticated, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login'); // Redirect to login if not authenticated
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) return <p>Loading...</p>; // Show loading while checking auth

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome to the admin dashboard!</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default AdminDashboard;

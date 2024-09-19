'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Define the useAuth hook with TypeScript
const useAuth = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null); // Track user role

    useEffect(() => {
        // Check authentication status on mount
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            router.push('/login');
        }
    }, [router]);

    const login = (email: string, password: string) => {
        // Define your login data
        const adminData = {
            email: 'admin@example.com',
            password: 'adminPassword123',
        };

        const userData = {
            email: 'user@example.com',
            password: 'userPassword123',
        };

        if (email === adminData.email && password === adminData.password) {
            // Admin login
            const token = 'adminToken123';
            localStorage.setItem('authToken', token);
            setIsAuthenticated(true);
            setUserRole('admin');
            router.push('/admin'); // Redirect to admin page
        } else if (email === userData.email && password === userData.password) {
            // User login
            const token = 'userToken123';
            localStorage.setItem('authToken', token);
            setIsAuthenticated(true);
            setUserRole('user');
            router.push('/user'); // Redirect to user page
        } else {
            alert('Invalid email or password');
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        setUserRole(null); // Reset user role
        router.push('/login'); // Redirect to login page
    };

    return { isAuthenticated, userRole, login, logout };
};

export default useAuth;

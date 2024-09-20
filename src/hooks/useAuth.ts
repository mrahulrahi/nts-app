'use client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<{ id: string; role: string } | null>(null);

    // Memoize the users array
    const users = useMemo(() => [
        { id: 'admin', email: 'admin@ig.com', password: 'adminPwd123', role: 'admin', token: 'adminToken123' },
        { id: 'user1', email: 'user1@ig.com', password: 'userPwd123', role: 'user', token: 'user1Token123' },
        { id: 'user2', email: 'user2@ig.com', password: 'userPwd456', role: 'user', token: 'user2Token456' },
        { id: 'user3', email: 'user3@ig.com', password: 'userPwd789', role: 'user', token: 'user3Token789' },
    ], []); // Empty dependency array ensures it only runs once

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');

        if (token && userId) {
            const authenticatedUser = users.find(user => user.id === userId);
            if (authenticatedUser) {
                setIsAuthenticated(true);
                setUser({ id: authenticatedUser.id, role: authenticatedUser.role });
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        } else {
            setIsAuthenticated(false);
            setUser(null);
        }
    }, [users, router]); // `users` is now memoized, so it won't change on re-render

    const login = (email: string, password: string) => {
        const authenticatedUser = users.find(user => user.email === email && user.password === password);
        if (authenticatedUser) {
            localStorage.setItem('authToken', authenticatedUser.token);
            localStorage.setItem('userId', authenticatedUser.id);
            setIsAuthenticated(true);
            setUser({ id: authenticatedUser.id, role: authenticatedUser.role });
            if (authenticatedUser.role === 'admin') {
                router.push('/admin'); // Redirect admin to /admin
            } else {
                router.push(`/user/${authenticatedUser.id}`); // Redirect user to their profile
            }
        } else {
            alert('Invalid email or password');
        }
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        setIsAuthenticated(false);
        setUser(null);
        router.push('/login');
    };

    return { isAuthenticated, user, login, logout };
};

export default useAuth;

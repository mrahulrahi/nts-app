// src/app/user/[userId]/UserProfile.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Updated import
import Link from 'next/link';
import useAuth from '../../../hooks/useAuth'; // Adjust the import path as necessary

// Define the User type
type User = {
    id: string;
    name: string;
    email: string;
};

type UserProfileProps = {
    user: User;
};

export default function UserProfile({ user }: UserProfileProps) {
    const { isAuthenticated, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>{user.name}&apos;s Profile</h1>
            <p>
                <strong>Name:</strong> {user.name}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <Link href="/">Back to Home</Link>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

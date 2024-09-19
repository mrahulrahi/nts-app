import React from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaCogs, FaSignOutAlt } from 'react-icons/fa';
import './Admin.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "IG - Admin Dashboard",
    description: "Admin Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h2>Admin Dashboard</h2>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><Link href="/admin"><FaHome /> Dashboard</Link></li>
                        <li><Link href="/admin/users"><FaUser /> Users</Link></li>
                        <li><Link href="/admin/settings"><FaCogs /> Settings</Link></li>
                        <li><Link href="/logout"><FaSignOutAlt /> Logout</Link></li>
                    </ul>
                </nav>
            </aside>
            <div className="main-content">
                <header className="top-nav">
                    <h1>Welcome to Admin Dashboard</h1>
                </header>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}



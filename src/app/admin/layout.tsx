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
        <>
            {children}
        </>
    );
}



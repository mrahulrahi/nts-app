// src/app/admin/page.tsx
import type { Metadata } from 'next';
import AdminDashboard from './AdminDashboard';
import './Admin.css';

export const metadata: Metadata = {
    title: "IG - Admin Dashboard",
    description: "Admin Dashboard",
};

export default function AdminPage() {
    return <AdminDashboard />;
}
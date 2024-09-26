// src/pages/AdminDashboard.jsx
import React from 'react';
import AdminMessages from '../components/admin/AdminMessages';

const AdminDashboard = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Dashboard Admin</h2>
            <AdminMessages />
        </div>
    );
};

export default AdminDashboard;

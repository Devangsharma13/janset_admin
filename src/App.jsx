import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminLayout from './components/admin/AdminLayout';
import DashboardPage from './pages/admin/DashboardPage';
import ProtectedRoute from './components/ProtectedRoute';

// Dashboard components
import DashboardHome from './components/dashboard/DashboardHome';
import LiveMap from './components/dashboard/LiveMap';
import AllReports from './components/dashboard/AllReports';
import Analytics from './components/dashboard/Analytics';
import Users from './components/dashboard/Users';
import Settings from './components/dashboard/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Updated Admin Route with Nested Children */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="live-map" element={<LiveMap />} />
          <Route path="all-reports" element={<AllReports />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

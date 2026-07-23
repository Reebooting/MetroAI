import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";
import AdminDashboard from "../pages/admin/AdminDashboard";

export default function AppRouter() {

    return (

        <Routes>

            <Route
                path="/"
                element={<LoginPage />}
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />

            <Route
                path="/admin/dashboard"
                element={<AdminDashboard />}
            />

        </Routes>

    );

}
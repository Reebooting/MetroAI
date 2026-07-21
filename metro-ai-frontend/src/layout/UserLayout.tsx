import { Outlet } from "react-router-dom";

import Sidebar from "../components/layouts/Sidebar";
import Navbar from "../components/layouts/Navbar";

export default function UserLayout() {

    return (

        <div className="dashboard-layout">

            <Sidebar />

            <main className="dashboard-main">

                <Navbar />

                <div className="dashboard-content">

                    <Outlet />

                </div>

            </main>

        </div>

    );

}
import {
    Bell,
    Search,
    UserCircle
} from "lucide-react";

export default function Navbar() {
    return (

        <header className="top-navbar">

            <div>

                <h3 className="fw-bold mb-0">

                    Dashboard

                </h3>

                <small className="text-muted">

                    Welcome back!

                </small>

            </div>

            <div className="navbar-right">

                <div className="search-box">

                    <Search size={18} />

                    <input
                        placeholder="Search stations, routes..."
                    />

                </div>

                <Bell size={22} />

                <UserCircle size={34} />

            </div>

        </header>

    );
}
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    MapPinned,
    Route,
    TrainFront,
    Ticket,
    Users,
    Bot,
    Settings,
    LogOut
} from "lucide-react";

import Logo from "../../pages/common/Logo";

const menu = [
    {
        title: "Dashboard",
        icon: <LayoutDashboard size={20} />,
        path: "/dashboard"
    },
    {
        title: "Journey Planner",
        icon: <Route size={20} />,
        path: "/routes"
    },
    {
        title: "Stations",
        icon: <MapPinned size={20} />,
        path: "/stations"
    },
    {
        title: "Metro Lines",
        icon: <TrainFront size={20} />,
        path: "/lines"
    },
    {
        title: "Tickets",
        icon: <Ticket size={20} />,
        path: "/tickets"
    },
    {
        title: "Passengers",
        icon: <Users size={20} />,
        path: "/users"
    },
    {
        title: "AI Assistant",
        icon: <Bot size={20} />,
        path: "/ai"
    },
    {
        title: "Settings",
        icon: <Settings size={20} />,
        path: "/settings"
    }
];

export default function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                <Logo />
            </div>

            <nav className="sidebar-menu">

                {menu.map(item => (

                    <NavLink
                        key={item.title}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >

                        {item.icon}

                        <span>{item.title}</span>

                    </NavLink>

                ))}

            </nav>

            <button className="logout-button">

                <LogOut size={18} />

                Logout

            </button>

        </aside>
    );
}
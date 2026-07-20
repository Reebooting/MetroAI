import {
  LayoutDashboard,
  MapPinned,
  Train,
  Ticket,
  History,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Stations",
    path: "/stations",
    icon: MapPinned,
  },
  {
    title: "Routes",
    path: "/routes",
    icon: Train,
  },
  {
    title: "Tickets",
    path: "/tickets",
    icon: Ticket,
  },
  {
    title: "Journey",
    path: "/journey",
    icon: History,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-slate-700">

        <h1 className="text-3xl font-bold text-blue-400">

          🚇 MetroAI

        </h1>

        <p className="text-sm text-slate-400 mt-2">

          Smart Metro Management

        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-4">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg p-3 mb-2 transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </NavLink>

          );
        })}
      </nav>

      {/* Footer */}

      <div className="border-t border-slate-700 p-4">

        <button className="flex w-full items-center gap-3 rounded-lg p-3 hover:bg-slate-800 transition">

          <Settings size={20} />

          Settings

        </button>

        <button className="mt-2 flex w-full items-center gap-3 rounded-lg p-3 text-red-400 hover:bg-red-600 hover:text-white transition">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}
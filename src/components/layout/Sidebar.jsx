import {
  Dashboard,
  User,
  Task,
  Cog,
  HelpCircle,
  UserCircle,
  SidebarRight,
} from "@boxicons/react";
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 786) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyles = ({ isActive }) =>
    `flex item-center space-x-2 p-2 rounded-lg transition-colors ${isActive ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-medium" : "hover:bg-gray-100 dark:hover:bg-gray-700 text-slate-700 dark:text-slate-200"}`;
  return (
    <aside
      aria-label="Sidebar navigation"
      className={`fixed inset-y-0 left-0 z-50 ${collapsed ? "w-20" : "w-64"} h-full shrink-0 bg-white dark:bg-gray-800 shadow-md flex flex-col justify-between overflow-y-auto transition-all duration-300 ease-in-out md:static md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div>
        {/* Branding */}
        <div className="p-4 text-xl font-bold flex items-center justify-between text-gray-800 dark:text-gray-200">
          {!collapsed && <span>Clientflow</span>}

          <SidebarRight
            className="cursor-ew-resize"
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>

        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <NavLink to="/dashboard" className={linkStyles} onClick={onClose}>
                <Dashboard />
                {!collapsed && <span>Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/clients" className={linkStyles} onClick={onClose}>
                <User />
                {!collapsed && <span>Clients</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/invoices" className={linkStyles} onClick={onClose}>
                <i className="bx bxs-spreadsheet text-xl"></i>
                {!collapsed && <span>Invoices</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/tasks" className={linkStyles} onClick={onClose}>
                <Task />
                {!collapsed && <span>Tasks</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={linkStyles} onClick={onClose}>
                <Cog />
                {!collapsed && <span>Settings</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" className={linkStyles} onClick={onClose}>
                <HelpCircle />
                {!collapsed && <span>Help & Support</span>}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* User Profile */}
      <div className="flex items-center border-t  text-gray-800 dark:text-gray-100 border-gray-100 dark:border-gray-700 space-x-2 p-4">
        <UserCircle />

        {!collapsed && (
          <div>
            <p className="text-sm font-semibold">Alex Joe</p>
            <p className="text-xs text-slate-500">admin</p>
          </div>
        )}

        <NavLink
          href="/logout"
          className="ml-auto text-slate-400 hover:text-slate-600"
        >
          {!collapsed && <i className="bx bx-log-out text-xl"></i>}
        </NavLink>
      </div>
    </aside>
  );
}

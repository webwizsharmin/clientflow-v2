import {
  Dashboard,
  User,
  Task,
  Cog,
  HelpCircle,
  UserCircle,
} from "@boxicons/react";

export default function Sidebar() {
  return (
    <aside
      aria-label="Sidebar navigation"
      className="w-64 h-screen bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-200 shadow-md flex flex-col justify-between"
    >
      {/* Branding */}
      <div className="p-4 text-xl font-bold">Clientflow</div>
      <nav className="flex-1">
        <ul className="space-y-1">
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Dashboard />
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <User />
            <a href="/clients">Clients</a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <i className="bx bxs-spreadsheet text-xl"></i>{" "}
            <a href="/invoices">Invoices</a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Task />
            <a href="/tasks">Tasks</a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <Cog />
            <a href="/settings">Settings</a>
          </li>
          <li className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <HelpCircle />
            <a href="/help">Help & Support</a>
          </li>
        </ul>
      </nav>

      {/* User Profile */}
      <div className="flex items-center border-t space-x-2 p-4 ">
        <UserCircle />
        <div>
          <p className="text-sm font-semibold">Alex Joe</p>
          <p className="text-xs text-slate-500">admin</p>
        </div>
        <a href="/logout" className="ml-auto">
          <i className="bx bx-log-out text-xl"></i>
        </a>
      </div>
    </aside>
  );
}

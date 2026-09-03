import { Bell, Sun, UserCircle } from "@boxicons/react";
import Searchbar from "./Searchbar";

export default function Topbar() {
  return (
    <header className="h-16 bg-white dark:bg-gray-900 shadow px-6 flex items-center justify-between">
      <Searchbar />

      <nav
        aria-label="User controls"
        className="flex items-center gap-x-4 text-slate-700 dark:text-slate-200"
      >
        <button type="button" aria-label="Notifications" className="icon-btn">
          <Bell className="text-xl" />
        </button>
        <button type="button" aria-label="Toggle theme" className="icon-btn">
          <Sun className="text-xl" />
        </button>
        <div className="flex items-center gap-2">
          <UserCircle className="text-xl" />
          <div className="hidden md:block">
            <p className="text-sm font-semibold">Alex Joe</p>
            <p className="text-xs text-slate-500">admin</p>
          </div>
        </div>
      </nav>
    </header>
  );
}

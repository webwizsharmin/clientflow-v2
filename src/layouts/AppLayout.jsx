import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

const AppLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex h-screen w-screen bg-gray-50 dark:bg-gray-950 ">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Right Side: Topbar + MainContent */}
      <div className="flex flex-col flex-1">
        <Topbar />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;

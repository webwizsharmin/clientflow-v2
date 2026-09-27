import { useState, useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Force collapsed on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCollapsed(true); // always collapsed on sm
      }
    };
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen w-screen bg-gray-50 dark:bg-gray-950 ">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Right Side: Topbar + MainContent */}
      <div className="flex flex-col flex-1">
        <Topbar />

        {/* Main content area */}
        <main
          className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ease-in-out
          ${collapsed ? "" : "ml-0"}  `}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MainContent from "./MainContent";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side: Topbar + MainContent */}
      <div className="flex flex-col flex-1">
        <Topbar />

        {/* Main content area */}
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

export default AppLayout;

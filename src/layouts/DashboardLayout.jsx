import { Outlet } from "react-router-dom";
import AppLayout from "./AppLayout";

const DashboardLayout = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default DashboardLayout;

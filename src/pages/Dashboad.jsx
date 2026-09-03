import { useContext } from "react";
import Button from "../components/ui/Button";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

import StatCard from "../components/ui/Cards/StatCard";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
  const { logout, resetAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleClick = () => {
    if (window.confirm("Are you sure you want to reset all auth data")) {
      resetAuth();
      window.location.reload();
    }
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          icon={ArrowTrendingUpIcon}
          title="Revenue"
          amount="$12,340"
          badge="Monthly"
          compare="+12% from last month"
          compareType="up"
        />
        <StatCard
          icon={ArrowTrendingUpIcon}
          title="Active Users"
          amount="1304"
          badge="Today"
          compare="-5% vs yesterday"
          compareType="down"
        />
        <StatCard
          title="Trickets Resolved"
          amount="89"
          badge="Support"
          compare="Stable"
          compareType="neutral"
        />

        <Button onClick={handleLogout} variant="primary" size="md">
          Logout
        </Button>
        <Button onClick={handleClick} variant="danger" size="md">
          Clear All
        </Button>
      </div>
    </DashboardLayout>
  );
}

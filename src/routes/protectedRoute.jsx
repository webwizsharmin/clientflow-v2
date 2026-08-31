import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

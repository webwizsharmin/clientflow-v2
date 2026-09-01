import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const ProtectedRoute = ({ children }) => {
  const { user, isRegistered } = useContext(AuthContext);

  if (!user) {
    // If no active session, decide based on registration state
    return isRegistered ? (
      <Navigate to="/login" replace />
    ) : (
      <Navigate to="/registration" replace />
    );
  }

  return children;
};

export default ProtectedRoute;

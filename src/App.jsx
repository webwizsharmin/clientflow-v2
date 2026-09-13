import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoute";
import Dashboard from "./pages/Dashboad";
import LoginForm from "./components/Forms/Login";
import { Registration } from "./components/Forms";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Clients from "./pages/clients";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  const { user, isRegistered } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : isRegistered ? (
              <Navigate to="/login" replace />
            ) : (
              <Navigate to="/registration" replace />
            )
          }
        />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<Registration />} />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/clients" element={<Clients />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

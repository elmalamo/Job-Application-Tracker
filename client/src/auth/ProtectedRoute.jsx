import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loader from "../components/Loader/Loader";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { user, loading } = useAuth();

  // Αν ακόμα φορτώνει το auth state, δείχνουμε loader
  if (loading) return <Loader />;

  // Αν δεν υπάρχει user, κάνουμε redirect στο login
  if (!user) return <Navigate to={redirectPath} replace />;

  // Αν υπάρχει user, render τα children routes
  return <Outlet />;
};

export default ProtectedRoute;
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  //if user doesnt exist redirect to login page
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  //if user exists render children 
  return <Outlet />;
};

export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { user, loading } = useAuth();

  if (loading) {
    console.log('BLOCKING - loading:', loading, 'isLoggingOut:', isLoggingOut);
    return null;
  }

  //if user doesnt exist redirect to login page
  if (!user) {
    console.log('NO USER - redirecting to login')
    return <Navigate to={redirectPath} replace />;
  }

  //if user exists render children 
  console.log('USER EXISTS - rendering outlet')
  return <Outlet />;
};

export default ProtectedRoute;

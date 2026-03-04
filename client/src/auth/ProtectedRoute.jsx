import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Loader from "../components/Loader";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { user, loading } = useAuth();

  //show loader if auth state is loading
  if (loading) {
    return <Loader />;
  }

  //if user doesnt exist redirect to login page
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  //if user exists render children 
  return <Outlet />;
};

export default ProtectedRoute;

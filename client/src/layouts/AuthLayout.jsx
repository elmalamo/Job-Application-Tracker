import AuthHeader from "../components/AuthHeader";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

import "./AuthLayout.css";

function AuthLayout(){
  return (
    <div className="app-container">
      <AuthHeader />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
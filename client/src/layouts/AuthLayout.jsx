import AuthHeader from "../components/AuthHeader/AuthHeader";
import Footer from "../components/Footer/Footer";
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
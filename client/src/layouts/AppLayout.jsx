import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

import "./AuthLayout.css";

function AppLayout(){
  return (
    <div className="app-container">
      <AppHeader />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
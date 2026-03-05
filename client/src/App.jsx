import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import { useAuth } from "./auth/AuthContext";

import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./pages/Board";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* protected routes(it gets in protectedroute first) */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Board />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./auth/ProtectedRoute";
import { useAuth } from "./auth/AuthContext";

import Layout from "./layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Board from "./pages/Board";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

         {/* protected routes(it gets in protectedroute first) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Board />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

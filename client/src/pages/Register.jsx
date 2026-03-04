import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import InputField from "../components/InputField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

import "./Login.css";

const Register = () => {
  const { user, error, login, logout } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loggedIn = await login({ email, password });

  };

  if (user) {
    return (
      <div>
        <h2>Welcome, {user.first_name}!</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Εγγραφή</h2>
          <InputField
            required={true}
            label="Όνομα"
            type="text"
            value={firstName}
            size="small"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputField
            required={true}
            label="Επώνυμο"
            type="text"
            value={lastName}
            size="small"
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputField
            required={true}
            label="Email"
            type="email"
            value={email}
            size="small"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            required={true}
            label="Κωδικός Πρόσβασης"
            type="password"
            value={password}
            size="small"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit" size="large">
            Εγγραφη
          </Button>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <Divider className="divider" />
          <p>
            Έχετε ήδη λογαριασμό;
            <br />
            Συνδεθείτε <Link to="/login">εδώ</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

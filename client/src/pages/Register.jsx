import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import InputField from "../components/InputField/InputField";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

function Register(){
  const { user, error, register, login } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      await register({ firstName, lastName, email, password });

      //if registration is successful
      await login({ email, password });

      //if login successful
      navigate("/", { replace: true });

    } catch (err) {
      //else catch the error
      console.log("Auth failed:", err);
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <form className="login-form" onSubmit={handleRegister}>
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
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}

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

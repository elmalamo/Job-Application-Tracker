import { useEffect, useState } from "react";
import { useAuth } from "../auth/AuthContext";
import InputField from "../components/InputField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Login() {
  const { user, error, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await login({ email, password });
      //if login successfull
      navigate("/", { replace: true }); // ή "/"
    } catch (err) {
      //else catch the error
      // console.log("Login failed", err);
      const status = err.response?.status;

      if (status === 400) {
        setSnackbar({
          open: true,
          message: "Παρακαλώ συμπληρώστε το email και τον κωδικό πρόσβασης!",
          severity: "error",
        });
      } else if (status === 404) {
        setSnackbar({
          open: true,
          message: "Ο χρήστης δεν υπάρχει!",
          severity: "error",
        });
      } else if (status === 401) {
        setSnackbar({
          open: true,
          message: "Λάθος κωδικός πρόσβασης!",
          severity: "error",
        });
      } else {
        setSnackbar({
          open: true,
          message: "Κάτι πήγε στραβά!",
          severity: "error",
        });
      }
    }
  };

  //dont let user go back to login page after successful login
  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  });

  return (
    <div className="container">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Σύνδεση</h2>
          <InputField
            required={false}
            label="Email"
            type="email"
            value={email}
            size="small"
            onChange={(event) => setEmail(event.target.value)}
          />
          <InputField
            required={false}
            label="Κωδικός Πρόσβασης"
            type="password"
            value={password}
            size="small"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button variant="contained" type="submit" size="large">
            Συνδεση
          </Button>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <Divider className="divider" />
          <p>
            Δεν έχετε λογαριασμό;
            <br />
            Κάντε εγγραφή <Link to="/register">εδώ</Link>.
          </p>

          <Divider />
          <p>
            Βρείτε μας σε <br />
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
          </p>
        </form>
      </div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;

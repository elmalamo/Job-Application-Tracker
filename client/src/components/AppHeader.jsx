import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "../auth/AuthContext";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";
import { flexGrow } from "@mui/system";

function AppHeader() {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      logout();
      navigate("/login");
    } catch (err) {
      console.log("Erro while logout", err);
    }
  };
  return (
    <header>
      <AppBar position="sticky">
        <Toolbar sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
        }}>
          <Typography variant="h5" component="div" sx={{paddingLeft: "20px"}}>
            ElMalamo's Job Application Tracker
          </Typography>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            sx={{paddingRight: "20px"}}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Αποσύνδεση</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default AppHeader;

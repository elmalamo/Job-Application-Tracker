import { Router } from "express";
import { register, login, logout, getLoggedInUser } from "../controllers/auth.controllers.js";
import { authenticateUser } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authenticateUser, getLoggedInUser);

export default router;
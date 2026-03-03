import { Router } from "express";
import { authenticateUser } from "../middleware/auth.middleware.js";
import { createApplication, patchApplication, deleteApplication, getUserApplications } from "../controllers/applications.controllers.js";

const router = Router();

router.post("/", authenticateUser, createApplication);
router.patch("/:id", authenticateUser, patchApplication);
router.delete("/:id", authenticateUser, deleteApplication)
router.get("/", authenticateUser, getUserApplications);


export default router;
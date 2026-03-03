import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import applicationsRoutes from "./routes/applications.routes.js";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: `http://localhost:${process.env.CLIENT_PORT}`,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationsRoutes);

export default app;

import cors from "cors";
import express from "express";
import pool from "./db/pool.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/admin.js";
import clientRoutes from "./routes/clients.js";
import projectRoutes from "./routes/projects.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/clients", clientRoutes);

app.use("/api/projects", projectRoutes);

app.get("/api/health", (request, response) => {
  response.status(200).json({
    status: "ok",
    message: "Zephyr Visions API is running",
  });
});

app.get("/api/database-health", async (request, response) => {
  try {
    const result = await pool.query("SELECT NOW() AS current_time");

    response.status(200).json({
      status: "ok",
      message: "PostgreSQL connection successful",
      databaseTime: result.rows[0].current_time,
    });
  } catch (error) {
    console.error("Database health check failed:", error);

    response.status(500).json({
      status: "error",
      message: "Unable to connect to PostgreSQL",
    });
  }
});

app.use((request, response) => {
  response.status(404).json({
    error: "Route not found",
  });
});

export default app;
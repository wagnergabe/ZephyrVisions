import { getDashboardStats } from "../services/dashboardService.js";

export async function getAdminDashboard(request, response) {
  try {
    const stats = await getDashboardStats();

    response.status(200).json(stats);
  } catch (error) {
    console.error("Failed to load admin dashboard:", error);

    response.status(500).json({
      error: "Unable to load admin dashboard.",
    });
  }
}
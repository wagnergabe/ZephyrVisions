import pool from "../db/pool.js";

export async function getDashboardStats() {
  const statsResult = await pool.query(`
    SELECT
      (
        SELECT COUNT(*)
        FROM users
        WHERE role = 'client'
      ) AS clients,

      (
        SELECT COUNT(*)
        FROM projects
        WHERE status <> 'Delivered'
      ) AS active_projects,

      (
        SELECT COUNT(*)
        FROM projects
        WHERE status = 'Delivered'
      ) AS delivered_projects,

      (
        SELECT COUNT(*)
        FROM deliverables
      ) AS files_uploaded
  `);

  const projectsResult = await pool.query(`
    SELECT
      projects.id,
      projects.name,
      projects.status,
      projects.delivery_date,
      users.company AS client
    FROM projects
    JOIN users
      ON projects.client_id = users.id
    ORDER BY projects.created_at DESC
    LIMIT 5
  `);

  const row = statsResult.rows[0];

  return {
    clients: Number(row.clients),
    activeProjects: Number(row.active_projects),
    deliveredProjects: Number(row.delivered_projects),
    filesUploaded: Number(row.files_uploaded),
    recentProjects: projectsResult.rows.map((project) => ({
      id: project.id,
      name: project.name,
      client: project.client,
      status: project.status,
      deliveryDate: project.delivery_date,
    })),
  };
}
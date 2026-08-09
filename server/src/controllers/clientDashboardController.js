import pool from "../db/pool.js";
import fs from "fs";
import path from "path";

export async function getClientDashboard(request, response) {
  const clientId = request.user.id;

  try {
    const clientResult = await pool.query(
      `
        SELECT
          id,
          first_name,
          last_name,
          company,
          email
        FROM users
        WHERE id = $1
          AND role = 'client'
        LIMIT 1
      `,
      [clientId]
    );

    if (clientResult.rows.length === 0) {
      return response.status(404).json({
        error: "Client account not found.",
      });
    }

    const projectsResult = await pool.query(
      `
        SELECT
          id,
          name,
          project_type,
          status,
          description,
          flight_date,
          delivery_date,
          created_at
        FROM projects
        WHERE client_id = $1
        ORDER BY created_at DESC
      `,
      [clientId]
    );

    const client = clientResult.rows[0];

    return response.status(200).json({
      client: {
        id: client.id,
        firstName: client.first_name,
        lastName: client.last_name,
        company: client.company,
        email: client.email,
      },
      projects: projectsResult.rows.map((project) => ({
        id: project.id,
        name: project.name,
        projectType: project.project_type,
        status: project.status,
        description: project.description,
        flightDate: project.flight_date,
        deliveryDate: project.delivery_date,
        createdAt: project.created_at,
      })),
    });
  } catch (error) {
    console.error("Failed to load client dashboard:", error);

    return response.status(500).json({
      error: "Unable to load client dashboard.",
    });
  }
};

export async function getClientProjectById(request, response) {
  const clientId = request.user.id;
  const { projectId } = request.params;

  try {
    const result = await pool.query(
      `
        SELECT
          projects.id,
          projects.name,
          projects.project_type,
          projects.status,
          projects.description,
          projects.flight_date,
          projects.delivery_date,
          projects.created_at
        FROM projects
        WHERE projects.id = $1
          AND projects.client_id = $2
        LIMIT 1
      `,
      [projectId, clientId]
    );

    if (result.rows.length === 0) {
      return response.status(404).json({
        error: "Project not found.",
      });
    }

    const project = result.rows[0];

    return response.status(200).json({
      project: {
        id: project.id,
        name: project.name,
        projectType: project.project_type,
        status: project.status,
        description: project.description,
        flightDate: project.flight_date,
        deliveryDate: project.delivery_date,
        createdAt: project.created_at,
      },
    });
  } catch (error) {
    console.error("Failed to load client project:", error);

    return response.status(500).json({
      error: "Unable to load project.",
    });
  }
};

export async function getClientProjectDeliverables(request, response) {
  const clientId = request.user.id;
  const { projectId } = request.params;

  try {
    const projectResult = await pool.query(
      `
        SELECT id
        FROM projects
        WHERE id = $1
          AND client_id = $2
        LIMIT 1
      `,
      [projectId, clientId]
    );

    if (projectResult.rows.length === 0) {
      return response.status(404).json({
        error: "Project not found.",
      });
    }

    const deliverablesResult = await pool.query(
      `
        SELECT
          id,
          filename,
          filesize,
          uploaded_at
        FROM deliverables
        WHERE project_id = $1
        ORDER BY uploaded_at DESC
      `,
      [projectId]
    );

    return response.status(200).json({
      deliverables: deliverablesResult.rows.map((deliverable) => ({
        id: deliverable.id,
        filename: deliverable.filename,
        filesize: deliverable.filesize,
        uploadedAt: deliverable.uploaded_at,
      })),
    });
  } catch (error) {
    console.error("Failed to load client deliverables:", error);

    return response.status(500).json({
      error: "Unable to load deliverables.",
    });
  }
}

export async function downloadClientDeliverable(request, response) {
  const clientId = request.user.id;
  const { deliverableId } = request.params;

  try {
    const result = await pool.query(
      `
        SELECT
          deliverables.id,
          deliverables.filename,
          deliverables.filepath
        FROM deliverables
        JOIN projects
          ON deliverables.project_id = projects.id
        WHERE deliverables.id = $1
          AND projects.client_id = $2
        LIMIT 1
      `,
      [deliverableId, clientId]
    );

    if (result.rows.length === 0) {
      return response.status(404).json({
        error: "Deliverable not found.",
      });
    }

    const deliverable = result.rows[0];
    const absolutePath = path.resolve(deliverable.filepath);

    if (!fs.existsSync(absolutePath)) {
      return response.status(404).json({
        error: "File not found on server.",
      });
    }

    return response.download(
      absolutePath,
      deliverable.filename
    );
  } catch (error) {
    console.error("Failed to download client deliverable:", error);

    return response.status(500).json({
      error: "Unable to download deliverable.",
    });
  }
}
import pool from "../db/pool.js";

export async function createProject(request, response) {
  const {
    clientId,
    name,
    projectType,
    status,
    description,
    flightDate,
    deliveryDate,
  } = request.body;

  if (!clientId || !name) {
    return response.status(400).json({
      error: "Client and project name are required.",
    });
  }

  try {
    const clientResult = await pool.query(
      `
        SELECT id
        FROM users
        WHERE id = $1
          AND role = 'client'
      `,
      [clientId]
    );

    if (clientResult.rows.length === 0) {
      return response.status(400).json({
        error: "Selected client does not exist.",
      });
    }

    const result = await pool.query(
      `
        INSERT INTO projects (
          client_id,
          name,
          project_type,
          status,
          description,
          flight_date,
          delivery_date
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING
          id,
          client_id,
          name,
          project_type,
          status,
          description,
          flight_date,
          delivery_date,
          created_at
      `,
      [
        Number(clientId),
        name.trim(),
        projectType?.trim() || null,
        status?.trim() || "Scheduled",
        description?.trim() || null,
        flightDate || null,
        deliveryDate || null,
      ]
    );

    const project = result.rows[0];

    return response.status(201).json({
      message: "Project created successfully.",
      project: {
        id: project.id,
        clientId: project.client_id,
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
    console.error("Failed to create project:", error);

    return response.status(500).json({
      error: "Unable to create project.",
    });
  }
}

export async function getProjectById(request, response) {
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
          projects.created_at,
          users.id AS client_id,
          users.first_name,
          users.last_name,
          users.company,
          users.email
        FROM projects
        JOIN users
          ON projects.client_id = users.id
        WHERE projects.id = $1
        LIMIT 1
      `,
      [projectId]
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
        client: {
          id: project.client_id,
          firstName: project.first_name,
          lastName: project.last_name,
          company: project.company,
          email: project.email,
        },
      },
    });
  } catch (error) {
    console.error("Failed to load project:", error);

    return response.status(500).json({
      error: "Unable to load project.",
    });
  }
}

export async function updateProject(request, response) {
  const { projectId } = request.params;

  const {
    clientId,
    name,
    projectType,
    status,
    description,
    flightDate,
    deliveryDate,
  } = request.body;

  if (!clientId || !name) {
    return response.status(400).json({
      error: "Client and project name are required.",
    });
  }

  try {
    const clientResult = await pool.query(
      `
        SELECT id
        FROM users
        WHERE id = $1
          AND role = 'client'
      `,
      [clientId]
    );

    if (clientResult.rows.length === 0) {
      return response.status(400).json({
        error: "Selected client does not exist.",
      });
    }

    const result = await pool.query(
      `
        UPDATE projects
        SET
          client_id = $1,
          name = $2,
          project_type = $3,
          status = $4,
          description = $5,
          flight_date = $6,
          delivery_date = $7
        WHERE id = $8
        RETURNING
          id,
          client_id,
          name,
          project_type,
          status,
          description,
          flight_date,
          delivery_date,
          created_at
      `,
      [
        Number(clientId),
        name.trim(),
        projectType?.trim() || null,
        status?.trim() || "Scheduled",
        description?.trim() || null,
        flightDate || null,
        deliveryDate || null,
        projectId,
      ]
    );

    if (result.rows.length === 0) {
      return response.status(404).json({
        error: "Project not found.",
      });
    }

    const project = result.rows[0];

    return response.status(200).json({
      message: "Project updated successfully.",
      project: {
        id: project.id,
        clientId: project.client_id,
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
    console.error("Failed to update project:", error);

    return response.status(500).json({
      error: "Unable to update project.",
    });
  }
}
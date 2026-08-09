import pool from "../db/pool.js";
import fs from "fs";
import path from "path";

export async function getProjectDeliverables(request, response) {
  const { projectId } = request.params;

  try {
    const projectResult = await pool.query(
      `
        SELECT id
        FROM projects
        WHERE id = $1
      `,
      [projectId]
    );

    if (projectResult.rows.length === 0) {
      return response.status(404).json({
        error: "Project not found.",
      });
    }

    const result = await pool.query(
      `
        SELECT
          id,
          project_id,
          filename,
          filepath,
          filetype,
          filesize,
          uploaded_at
        FROM deliverables
        WHERE project_id = $1
        ORDER BY uploaded_at DESC
      `,
      [projectId]
    );

    const deliverables = result.rows.map((item) => ({
      id: item.id,
      projectId: item.project_id,
      filename: item.filename,
      filepath: item.filepath,
      filetype: item.filetype,
      filesize: item.filesize,
      uploadedAt: item.uploaded_at,
    }));

    return response.status(200).json({
      deliverables,
    });
  } catch (error) {
    console.error("Failed to load deliverables:", error);

    return response.status(500).json({
      error: "Unable to load deliverables.",
    });
  }
};

export async function uploadProjectDeliverable(request, response) {
  const { projectId } = request.params;

  try {
    if (!request.file) {
      return response.status(400).json({
        error: "No file was uploaded.",
      });
    }

    const projectResult = await pool.query(
      `
        SELECT id
        FROM projects
        WHERE id = $1
      `,
      [projectId]
    );

    if (projectResult.rows.length === 0) {
      return response.status(404).json({
        error: "Project not found.",
      });
    }

    const result = await pool.query(
      `
        INSERT INTO deliverables (
          project_id,
          filename,
          filepath,
          filetype,
          filesize
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `,
      [
        projectId,
        request.file.originalname,
        request.file.path,
        request.file.mimetype,
        request.file.size,
      ]
    );

    const item = result.rows[0];

    return response.status(201).json({
      message: "Deliverable uploaded successfully.",
      deliverable: {
        id: item.id,
        projectId: item.project_id,
        filename: item.filename,
        filepath: item.filepath,
        filetype: item.filetype,
        filesize: item.filesize,
        uploadedAt: item.uploaded_at,
      },
    });
  } catch (error) {
    console.error("Failed to upload deliverable:", error);

    return response.status(500).json({
      error: "Unable to upload deliverable.",
    });
  }
};

export async function downloadDeliverable(request, response) {
  const { deliverableId } = request.params;

  try {
    const result = await pool.query(
      `
        SELECT
          id,
          filename,
          filepath
        FROM deliverables
        WHERE id = $1
        LIMIT 1
      `,
      [deliverableId]
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
    console.error("Failed to download deliverable:", error);

    return response.status(500).json({
      error: "Unable to download deliverable.",
    });
  }
}
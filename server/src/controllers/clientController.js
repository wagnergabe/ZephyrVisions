import bcrypt from "bcrypt";
import pool from "../db/pool.js";

export async function createClient(request, response) {
  const {
    firstName,
    lastName,
    company,
    email,
    password,
  } = request.body;

  if (!firstName || !lastName || !email || !password) {
    return response.status(400).json({
      error: "First name, last name, email, and password are required.",
    });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE LOWER(email) = $1",
      [normalizedEmail]
    );

    if (existingUser.rows.length > 0) {
      return response.status(409).json({
        error: "A user with that email already exists.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const result = await pool.query(
      `
        INSERT INTO users (
          first_name,
          last_name,
          company,
          email,
          password_hash,
          role
        )
        VALUES ($1, $2, $3, $4, $5, 'client')
        RETURNING
          id,
          first_name,
          last_name,
          company,
          email,
          role,
          created_at
      `,
      [
        firstName.trim(),
        lastName.trim(),
        company?.trim() || null,
        normalizedEmail,
        passwordHash,
      ]
    );

    const client = result.rows[0];

    return response.status(201).json({
      message: "Client created successfully.",
      client: {
        id: client.id,
        firstName: client.first_name,
        lastName: client.last_name,
        company: client.company,
        email: client.email,
        role: client.role,
        createdAt: client.created_at,
      },
    });
  } catch (error) {
    console.error("Failed to create client:", error);

    return response.status(500).json({
      error: "Unable to create client.",
    });
  }
}

export async function getClients(request, response) {
  try {
    const result = await pool.query(`
      SELECT
        id,
        first_name,
        last_name,
        company,
        email
      FROM users
      WHERE role = 'client'
      ORDER BY company NULLS LAST, last_name, first_name
    `);

    const clients = result.rows.map((client) => ({
      id: client.id,
      firstName: client.first_name,
      lastName: client.last_name,
      company: client.company,
      email: client.email,
    }));

    return response.status(200).json({
      clients,
    });
  } catch (error) {
    console.error("Failed to load clients:", error);

    return response.status(500).json({
      error: "Unable to load clients.",
    });
  }
}
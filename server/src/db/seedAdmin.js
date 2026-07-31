import "dotenv/config";
import bcrypt from "bcrypt";
import pool from "./pool.js";

const ADMIN_EMAIL = "admin@zephyrvisions.com";
const ADMIN_PASSWORD = "ChangeMeImmediately123!";

async function seedAdmin() {
  try {
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [ADMIN_EMAIL]
    );

    if (existingUser.rows.length > 0) {
      console.log("Admin user already exists.");
      return;
    }

    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);

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
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id, first_name, last_name, email, role
      `,
      [
        "Gabe",
        "Wagner",
        "Zephyr Visions",
        ADMIN_EMAIL,
        passwordHash,
        "admin",
      ]
    );

    console.log("Admin user created:");
    console.table(result.rows);
  } catch (error) {
    console.error("Failed to create admin user:", error);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

seedAdmin();
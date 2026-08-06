import "dotenv/config";
import bcrypt from "bcrypt";
import pool from "./pool.js";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  throw new Error(
    "ADMIN_EMAIL and ADMIN_PASSWORD must be configured in server/.env"
  );
}

async function seedAdmin() {
  try {
    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [ADMIN_EMAIL]
    );

    if (existingUser.rows.length > 0) {
      const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);

      await pool.query(
        "UPDATE users SET password_hash = $1 WHERE email = $2",
        [passwordHash, ADMIN_EMAIL]
      );

      console.log("Admin password updated.");
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
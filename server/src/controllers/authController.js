import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db/pool.js";

export async function login(request, response) {
  const email = request.body.email?.trim().toLowerCase();
  const password = request.body.password;

  if (!email || !password) {
    return response.status(400).json({
      error: "Email and password are required.",
    });
  }

  try {
    const result = await pool.query(
      `
        SELECT
          id,
          first_name,
          last_name,
          company,
          email,
          password_hash,
          role
        FROM users
        WHERE LOWER(email) = $1
        LIMIT 1
      `,
      [email]
    );

    const user = result.rows[0];

    if (!user) {
      return response.status(401).json({
        error: "Invalid email or password.",
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatches) {
      return response.status(401).json({
        error: "Invalid email or password.",
      });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not configured.");

      return response.status(500).json({
        error: "Server authentication configuration is incomplete.",
      });
    }

    const token = jwt.sign(
      {
        sub: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "8h",
      }
    );

    return response.status(200).json({
      message: "Login successful.",
      token,
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        company: user.company,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login failed:", error);

    return response.status(500).json({
      error: "Unable to complete login.",
    });
  }
}
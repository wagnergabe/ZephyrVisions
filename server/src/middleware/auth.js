import jwt from "jsonwebtoken";

export function requireAuth(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return response.status(401).json({
      error: "Authentication required.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    request.user = {
      id: decoded.sub,
      role: decoded.role,
    };

    next();
  } catch (error) {
    return response.status(401).json({
      error: "Invalid or expired authentication token.",
    });
  }
}

export function requireAdmin(request, response, next) {
  if (request.user?.role !== "admin") {
    return response.status(403).json({
      error: "Administrator access required.",
    });
  }

  next();
}
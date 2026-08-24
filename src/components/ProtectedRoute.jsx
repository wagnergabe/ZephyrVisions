import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, requiredRole }) {
  const token = sessionStorage.getItem("authToken");
  const storedUser = sessionStorage.getItem("currentUser");

  if (!token || !storedUser) {
    return <Navigate to="/login" replace />;
  }

  let user;

  try {
    user = JSON.parse(storedUser);
  } catch {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("currentUser");

    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return (
      <Navigate
        to={user.role === "admin" ? "/admin" : "/dashboard"}
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;
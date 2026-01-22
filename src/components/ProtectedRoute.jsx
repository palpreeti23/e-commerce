import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;

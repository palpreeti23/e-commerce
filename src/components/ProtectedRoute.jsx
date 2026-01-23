import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";

function ProtectedRoute() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const outletContext = useOutletContext();

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet context={outletContext} />;
}

export default ProtectedRoute;

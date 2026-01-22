import React from "react";
import { useContext as use } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading.jsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login" />;
};
export default PrivateRoute;

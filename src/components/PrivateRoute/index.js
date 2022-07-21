import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...props }) => {
    if (localStorage.getItem("atk")) return <Component />;
    return <Navigate to="/login " />;
};

export default PrivateRoute;

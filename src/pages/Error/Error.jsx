import React from "react";
import "../Error/error.css";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <h2>Something went wrong</h2>

      <p className="error-message">
        {err?.status} : {err?.statusText || "Unexpected Error"}
      </p>

      <Link to="/" className="back-home">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;

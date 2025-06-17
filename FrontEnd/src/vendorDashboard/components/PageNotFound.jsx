import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Page Not Found</h2>
      <p className="mb-4 text-muted">Oops! The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;

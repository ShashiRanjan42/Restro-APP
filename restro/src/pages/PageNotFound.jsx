import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
        Go Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;

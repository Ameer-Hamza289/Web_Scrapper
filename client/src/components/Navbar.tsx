import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">Web Scraper</Link>
        <div>
          <Link to="/document" className="mx-2">Documentation</Link>
          <Link to="/auth" className="mx-2">Login</Link>
          <Link to="/main" className="mx-2">Scrape</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

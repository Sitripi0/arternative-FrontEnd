import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 dark:border-neutral-700 mt-10">
      <nav className="max-w-7xl w-full flex items-center px-4 md:px-6 lg:px-8 mx-auto py-7">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo module3.png"
              alt="ArterNative logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* About Link */}
        <div className="ms-auto flex items-center gap-4">
          <Link
            to="/about"
            className="text-sm hover:text-amber-600 transition"
          >
            About
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

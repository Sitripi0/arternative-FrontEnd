import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
      <nav className="max-w-7xl w-full flex items-center px-4 md:px-6 lg:px-8 mx-auto">
        <div className="lg:col-span-3 flex items-center">
          <a href="/">
            <img
              src="/public/logo module3.png"
              alt="ArterNative logo"
              className="h-auto w-50"
            />
          </a>
        </div>
        <div className="ms-auto flex gap-4">
          <Link to="/events" >
            <button className="text-sm">Events</button>
          </Link>

          <Link to="/artist">
            <button className="text-sm">Artists</button>
          </Link>

          <Link to="/login">
            <button className="bg-yellow-400 text-black px-3 py-2 rounded-xl text-sm font-medium">Log in</button>
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Header;
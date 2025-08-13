import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const Header = () => {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser();
    navigate("/");
  };

  return (
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7 ">
      <nav className="max-w-7xl w-full flex items-center px-4 md:px-6 lg:px-8 mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo module3.png"
              alt="ArterNative logo"
              className="h-50 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="ms-auto flex items-center gap-4">
          {isLoggedIn && (
            <Link
              to="/posts/new"
              className="text-sm hover:text-amber-600 transition"
            >
              Create a Post
            </Link>
          )}

          <Link
            to="/posts"
            className="text-sm hover:text-amber-600 transition"
          >
            Posts
          </Link>

          {isLoggedIn && (
            <Link
              to="/myprofile"
              className="text-sm hover:text-amber-600 transition"
            >
              MyProfile
            </Link>
          )}

          <Link
            to="/events"
            className="text-sm hover:text-amber-600 transition"
          >
            Events
          </Link>

          <Link
            to="/artist"
            className="text-sm hover:text-amber-600 transition"
          >
            Artists
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-yellow-400 text-black px-3 py-2 rounded-xl text-sm font-medium hover:bg-yellow-500 transition"
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-yellow-400 text-black px-3 py-2 rounded-xl text-sm font-medium hover:bg-yellow-500 transition">
                Log in
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

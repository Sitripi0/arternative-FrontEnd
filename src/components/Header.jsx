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
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
      <nav className="max-w-7xl w-full flex items-center px-4 md:px-6 lg:px-8 mx-auto">
        <div className="lg:col-span-3 flex items-center">
          <a href="/">
            <img
              src="/logo module3.png"
              alt="ArterNative logo"
              className="h-auto w-50"
            />
          </a>
        </div>

        <div className="ms-auto flex gap-4">

          <Link to="/posts/new">
            <button className="text-sm">Create a Post</button>
          </Link>
          <Link to="/posts" >
            <button className="text-sm">Posts</button>
          </Link>
          <Link to="/myprofile" >
            <button className="text-sm">MyProfile</button>
          </Link>
          <Link to="/events" >
            <button className="text-sm">Events</button>
          </Link>
          <Link to="/artist">
            <button className="text-sm">Artists</button>
          </Link>
          {isLoggedIn ? (
            <button onClick={handleLogout}
              className="bg-yellow-400 text-black px-3 py-2 rounded-xl text-sm font-medium">
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="bg-yellow-400 text-black px-3 py-2 rounded-xl text-sm font-medium">
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
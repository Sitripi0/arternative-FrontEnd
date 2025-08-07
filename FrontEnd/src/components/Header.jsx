import React from "react";

const Header = () => {
  return (
    <header className="flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
      {/* Simplified header content */}
      <nav className="max-w-7xl w-full flex items-center px-4 md:px-6 lg:px-8 mx-auto">
        <div className="lg:col-span-3 flex items-center">
          <a href="/" className="text-xl font-semibold">Coffee Shop</a>
        </div>
        <div className="ms-auto flex gap-4">
          <button className="text-sm">Search</button>
          <button className="text-sm">Cart</button>
          <button className="bg-yellow-400 text-black px-3 py-2 rounded-xl text-sm font-medium">Sign in</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
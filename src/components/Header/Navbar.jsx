import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-5">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <NavLink to="/" className="text-[#b8bcc8]">
            Page1
          </NavLink>
          <NavLink to="/pageTwo" className="text-[#b8bcc8]">
            Page2
          </NavLink>
        </div>
        <div>
          <Link to="/login">
            <button className="btn bg-[#3383ff] text-white font-semibold px-8 py-1 rounded-sm">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

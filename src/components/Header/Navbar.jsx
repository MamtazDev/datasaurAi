import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-6">
      <div className="flex gap-5">
        <NavLink to="/" className="text-[#b8bcc8]">
          Page1
        </NavLink>
        <NavLink to="/pageTwo" className="text-[#b8bcc8]">
          Page2
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

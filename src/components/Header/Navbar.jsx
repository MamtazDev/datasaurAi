import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const activeClassName = "text-[#538cff]";

  const handleLogout = () => {
    localStorage.removeItem("dataSaurAuth");
    setUser(null);
  };
  return (
    <nav className="p-5">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : "text-[#b8bcc8]"
            }
          >
            Evaluation
          </NavLink>
          <NavLink
            to="/pageTwo"
            className={({ isActive }) =>
              isActive ? activeClassName : "text-[#b8bcc8]"
            }
          >
            Ranking
          </NavLink>
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-3">
              <div
                className="border px-3 rounded-2xl font-semibold
               text-[#538cff]"
              >
                {user.name}
              </div>
              <button
                className="btn flex items-center gap-2 bg-[#f9f9f9] text-black font-semibold px-5 py-1 rounded-sm"
                onClick={handleLogout}
              >
                <FaUserAlt />
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-[#3383ff] text-white font-semibold px-8 py-1 rounded-sm">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

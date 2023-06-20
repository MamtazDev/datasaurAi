import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  // const [user, setUser] = useState(true);

  console.log(user, "uuuuuu");

  const handleLogout = () => {
    localStorage.removeItem("dataSaurAuth");
    setUser(null);
  };
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

import React from "react";
import { NavLink } from "react-router-dom";

function NavTabs() {
  return (
    <div className="bg-gray-700">
      <ul className="nav nav-tabs text-white">
        <li className="nav-item">
          <NavLink to="/" end>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" end>
            Past Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" end>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;

import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "./Switcher";

function NavTabs() {
  return (
    <div className="bg-alt-200 dark:bg-alt-900 flex flex-row justify-between items-center pl-10 pr-10 pt-5 pb-5">
      <div className="flex flex-row items-center">
        <h2 className="self-center mb-[-5px] pr-10 text-primary-700 dark:text-primary-300">
          Seamus Barnett
        </h2>
        <ul className="flex flex-row nav nav-tabs text-primary-900 dark:text-primary-200  gap-10">
          <li className="nav-item hover:text-primary-500 dark:hover:text-primary-100">
            <NavLink to="/" end>
              About
            </NavLink>
          </li>
          <li className="nav-item hover:text-primary-500 dark:hover:text-primary-100">
            <NavLink to="/projects" end>
              Past Projects
            </NavLink>
          </li>
          <li className="nav-item hover:text-primary-500 dark:hover:text-primary-100">
            <NavLink to="/contact" end>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
      <Switcher />
    </div>
  );
}

export default NavTabs;

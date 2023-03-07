import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "./Switcher";

function NavTabs() {
  return (
    <div className="bg-alt-200 dark:bg-alt-900 flex flex-row justify-between items-center pl-10 pr-10 pt-5 pb-5 h-[100px]">
      <div className="grid items-center">
        <h2 className="self-center lg:pr-10 pr-5 text-xl text-primary-700 dark:text-primary-300">
          Seamus Barnett
        </h2>
        <ul className="flex flex-row nav nav-tabs text-primary-900 dark:text-primary-200 gap-5 lg:gap-10">
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

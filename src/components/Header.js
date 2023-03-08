import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "./Switcher";
import CV from "../assets/seamus-barnett-webdev-cv-jan-2023.pdf";

function NavTabs() {
  return (
    // Height 100px - important to keep so that body size stays full height (body height is 100vh - header height - footer height)
    <div className="bg-alt-200 dark:bg-alt-900 flex flex-row justify-between items-center md:px-10 px-2 pt-5 pb-5 h-[100px] ">
      <div className="grid items-center">
        <h2 className="self-center lg:pr-10 pr-5 text-xl text-primary-700 dark:text-primary-300">
          Seamus Barnett
        </h2>
        <ul className="flex flex-row nav nav-tabs items-center text-primary-900 dark:text-primary-200 gap-2 md:gap-10">
          <li className="nav-item hover:text-primary-500 dark:hover:text-primary-100">
            <NavLink className="fluid-sm md:fluid-base" to="/" end>
              About
            </NavLink>
          </li>
          <li className="nav-item hover:text-primary-500 dark:hover:text-primary-100">
            <NavLink className="fluid-sm md:fluid-base" to="/projects" end>
              Past Projects
            </NavLink>
          </li>
          <li className="nav-item hover:text-primary-500 dark:hover:text-primary-100">
            <NavLink className="fluid-sm md:fluid-base" to="/contact" end>
              Contact Me
            </NavLink>
          </li>
          <li>
            <a
              className="fluid-sm md:fluid-base"
              href={CV}
              download="Seamus Barnett Web Dev Resume Jan 2023"
            >
              <button className="px-2 pt-0.5 pb-1 border-2 border-secondary-500 hover:bg-secondary-500 text-primary-900 dark:text-secondary-100 hover:text-secondary-100 rounded-lg hover:bg-navy-600 transition-all duration-300 ease-out">
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
      <Switcher />
    </div>
  );
}

export default NavTabs;

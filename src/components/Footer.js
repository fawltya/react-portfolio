import React from "react";
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";

function Footer() {
  const [theme, setTheme] = useState(localStorage.theme);

  return (
    <div className="bg-alt-200 dark:bg-alt-900 flex flex-row items-center pl-10 justify-between pr-10 pt-5 pb-5">
      <p className="self-center w-25 mb-[-5px] text-sm pr-10 text-primary-700 dark:text-primary-300">
        Website built with ❤️ by Seamus
      </p>
      <div className="flex flex-row items-center w-25">
        <ul className="flex flex-row nav nav-tabs gap-10">
          <li>
            <SocialIcon
              url="https://github.com/fawltya"
              bgColor={localStorage.theme === "dark" ? "#c1d1d2" : "#032225"}
              style={{ height: 25, width: 25 }}
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.linkedin.com/in/seamus-barnett-307161261/"
              bgColor={localStorage.theme === "dark" ? "#c1d1d2" : "#032225"}
              style={{ height: 25, width: 25 }}
            />
          </li>
        </ul>
      </div>
      <div>
        <a
          href="mailto:seamus@designbarn.co.uk"
          className="w-25 self-center justify-end mb-[-5px] text-sm pr-10 text-primary-700 dark:text-primary-300"
        >
          seamus@designbarn.co.uk
        </a>
      </div>
    </div>
  );
}

export default Footer;

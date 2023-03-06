import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="bg-alt-200 dark:bg-alt-900 flex flex-row items-center pl-10 justify-between pr-10 pt-5 pb-5 h-[80px]">
      <p className="self-center w-25 mb-[-5px] text-sm text-primary-700 dark:text-primary-300">
        Built with React & Tailwind
      </p>
      <div className="flex flex-row items-center w-25">
        <ul className="flex flex-row gap-10">
          <li>
            <SocialIcon
              url="https://github.com/fawltya"
              className="fill-primary-700 dark:fill-primary-300 hover:fill-primary-500 dark:hover:fill-primary-200"
              bgColor="inherit"
              style={{ height: 25, width: 25 }}
              target="_blank"
            />
          </li>
          <li>
            <SocialIcon
              url="https://www.linkedin.com/in/seamus-barnett-307161261/"
              className="fill-primary-700 dark:fill-primary-300 hover:fill-primary-500 dark:hover:fill-primary-200"
              bgColor="inherit"
              style={{ height: 25, width: 25 }}
              target="_blank"
            />
          </li>
        </ul>
      </div>
      <div>
        <a
          href="mailto:seamus@designbarn.co.uk"
          className="w-25 self-center justify-end mb-[-5px] text-sm text-primary-700 dark:text-primary-300"
        >
          seamus@designbarn.co.uk
        </a>
      </div>
    </div>
  );
}

export default Footer;

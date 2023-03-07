import React from "react";
import seamus from "../assets/images/seamus.jpg";
import Skills from "../components/Skills";
import skills from "../utils/skills.json";
import htmlLogo from "../assets/images/icons/html-icon.svg";
import cssLogo from "../assets/images/icons/css-icon.svg";
import jsLogo from "../assets/images/icons/js-icon.svg";
import reactLogo from "../assets/images/icons/react-js-icon.svg";
import tailwindLogo from "../assets/images/icons/tailwind-css-icon.svg";

const logos = {
  HTML: htmlLogo,
  CSS: cssLogo,
  Javascript: jsLogo,
  React: reactLogo,
  Tailwind: tailwindLogo,
};

function About() {
  return (
    <div className="flex lg:flex-row flex-col p-10 lg:gap-20 gap-10 lg:px-20 py-20 min-h-[calc(100vh-180px)] align-middle justify-center items-center">
      <div className="flex flex-col lg:w-2/3">
        <div className="flex flex-row items-end gap-5 ">
          <img src={seamus} className="object-cover w-20 h-20 rounded-full" />
          <h2 className="text-primary-900 dark:text-primary-100">About Me</h2>
        </div>

        <div className="flex flex-row my-3 ">
          <span className="font-caSpotnik text-2xl pr-2 dark:text-primary-100 text-primary-800">
            Hi, I'm Seamus, a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-secondary-600 to-alt-600 dark:from-secondary-300 dark:via-secondary-500 dark:to-primary-300 font-caSpotnikBold text-2xl">
              {'<FrontEnd web="developer" />'}.
            </span>
          </span>
        </div>
        <div className="flex flex-col  dark:text-primary-200 text-primary-700">
          <p>
            I started building websites in 2018 with the Open House Festival
            site - which has had many revisions since!
          </p>
          <br />
          <p>
            When covid-19 hit I decided to make a go of it as a freelance
            developer under the name as<strong> Design Barn </strong>
            and recently I've become more interested in expanding my programming
            language knowledge, studying Javascript, React, Node and more on a
            front-end web dev course with EdX.
          </p>

          <a href="mailto:designbarn.co.uk" className="w-fit ">
            <button className="font-caSpotnikBold w-fit my-5 px-4 py-2 bg-secondary-500 hover:bg-secondary-400 text-secondary-100 rounded-lg hover:bg-navy-600 transition-all duration-300 ease-out">
              Work with me
            </button>
          </a>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center lg:w-1/3">
        <h4 className="pb-5 dark:text-primary-100 text-primary-800">
          Languages
        </h4>
        <table class="font-caSpotnik w-96 text-2xl pr-2 dark:text-primary-100 text-primary-800">
          <tbody className="text-sm ">
            {skills.map((skill) => {
              return (
                <Skills
                  key={skill.id}
                  name={skill.name}
                  icon={logos[skill.name]}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default About;

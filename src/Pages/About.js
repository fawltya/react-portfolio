import React from "react";
import seamus from "../assets/images/seamus.jpg";
import Skills from "../components/Skills";
import skills from "../utils/skills.json";
import htmlLogo from "../assets/images/icons/html-icon.svg";
import cssLogo from "../assets/images/icons/css-icon.svg";
import jsLogo from "../assets/images/icons/js-icon.svg";
import reactLogo from "../assets/images/icons/react-js-icon.svg";
import tailwindLogo from "../assets/images/icons/tailwind-css-icon.svg";
import grainImage from "../assets/images/dissolve-noise-texture.png";

const logos = {
  HTML: htmlLogo,
  CSS: cssLogo,
  Javascript: jsLogo,
  React: reactLogo,
  Tailwind: tailwindLogo,
};

function About() {
  return (
    <>
      <div
        className="absolute inset-0 hero-after"
        style={{ backgroundImage: `url(${grainImage})` }}
      ></div>
      {/* Makes min height of page 100vh - min-h-[calc(100vh-180px)] // 100vh-header height - footer height */}
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
              I've been building websites professionally since 2017, creating
              dynamic and highly functional sites for a wide range of clients,
              such as the brilliant
              <a href="https://courthousebangor.com" target="_blank">
                Open House Festival / The Court House
              </a>
              .
            </p>
            <br />
            <p>
              I've been able to stand out in the developer crowd by having a
              keen eye for design and UI/UX, having worked as graphic designer
              previously, and I often help clients with branding and website
              design.
            </p>
            <br />
            <p>
              Primarily though I'm a coder, specialising in Front-end
              development and with a tech stack centered around JavaScript. My
              design background has helped me especially proficient with CSS
              (and Tailwind), and able to create modern animations and
              interactions using GSAP.
            </p>
            <br />
            <a href="mailto:designbarn.co.uk" className="w-fit ">
              <button className="font-caSpotnikBold w-fit my-5 px-4 py-2 bg-secondary-500 hover:bg-secondary-400 text-secondary-100 rounded-lg hover:bg-navy-600 transition-all duration-300 ease-out">
                Say hello!
              </button>
            </a>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center lg:w-1/3">
          <h4 className="pb-5 dark:text-primary-100 text-primary-800">
            Skills
          </h4>
          <table class="font-caSpotnik w-96 text-2xl pr-2 dark:text-primary-100 text-primary-800">
            <tbody className="text-sm ">
              {/* Table of skills - map skills.json to Skills component // Could
            add more to this, like split into sections and add design skills too
  (check skills.json)*/}
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
    </>
  );
}

export default About;

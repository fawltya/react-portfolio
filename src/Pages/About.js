import React from "react";
import seamus from "../assets/images/seamus.jpg";
import Skills from "../components/Skills";
import skills from "../utils/skills.json";

function About() {
  return (
    <div className="flex flex-row p-10 gap-10 px-20">
      <div className="flex flex-col w-3/4">
        <div className="flex flex-row items-end gap-5 ">
          <img src={seamus} className="object-cover w-20 h-20 rounded-full" />
          <h2 className="text-primary-900 dark:text-primary-100">About Me</h2>
        </div>

        <div className="flex flex-row my-3 ">
          <span className="font-caSpotnik text-2xl pr-2 dark:text-primary-100 text-primary-800">
            Hi, I'm Seamus – a
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-secondary-600 to-alt-600 dark:from-secondary-300 dark:via-secondary-500 dark:to-primary-300 font-caSpotnikBold text-2xl">
            {'<FrontEnd web="developer" />'}.
          </span>
        </div>
        <div className="flex flex-col w-2/3 dark:text-primary-200 text-primary-700">
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

          <button className="font-caSpotnikBold w-fit my-5 px-4 py-2 bg-secondary-500 hover:bg-secondary-400 text-white font-medium rounded-lg hover:bg-navy-600 transition-all duration-300 ease-out">
            Work with me
          </button>
        </div>
      </div>
      <div className="w-1/4">
        {skills.map((skill) => {
          return <Skills key={skill.id} name={skill.name} icon={skill.icon} />;
        })}
      </div>
    </div>
  );
}

export default About;

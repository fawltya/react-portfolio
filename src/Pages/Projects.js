import React from "react";
import Project from "../components/Project";
import previousWork from "../utils/previous-work.json";
import riedImage from "../images/ried.jpg";
import courthouseImage from "../images/the-court-house.jpg";
import guillemotImage from "../images/the-guillemot.jpg";

const images = {
  "the-court-house": courthouseImage,
  ried: riedImage,
  "the-guillemot": guillemotImage,
};

function Projects() {
  return (
    <>
      <p>This is Projects page</p>
      <Project />
      {previousWork.map((work) => {
        return (
          <Project
            key={work.id}
            title={work.title}
            description={work.description}
            image={images[work.image]}
            imageAlt={work.imageAlt}
            ariaLabel={work.ariaLabel}
            areas={work.areas}
          />
        );
      })}
    </>
  );
}

export default Projects;

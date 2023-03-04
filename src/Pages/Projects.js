import React, { useState } from "react";
import Project from "../components/Project";
import previousWork from "../utils/previous-work.json";
import riedImage from "../images/ried.jpg";
import riedGif from "../images/ried.gif";
import courthouseImage from "../images/the-court-house-2.jpg";
import courthouseGif from "../images/the-court-house.gif";
import guillemotImage from "../images/the-guillemot.jpg";
import guillemotGif from "../images/the-guillemot.gif";

const images = {
  "the-court-house": courthouseImage,
  ried: riedImage,
  "the-guillemot": guillemotImage,
};
const gif = {
  "the-court-house": courthouseGif,
  ried: riedGif,
  "the-guillemot": guillemotGif,
};

function Projects() {
  const [hovered, setHovered] = useState(
    previousWork.map(() => false) // Initialize all projects as not hovered
  );

  return (
    <div className="flex flex-col items-center">
      <p>This is Projects page</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 lg:gap-8">
        {previousWork.map((work, index) => {
          return (
            <Project
              key={work.id}
              title={work.title}
              description={work.description}
              image={hovered[index] ? gif[work.image] : images[work.image]}
              imageAlt={work.imageAlt}
              ariaLabel={work.ariaLabel}
              areas={work.areas}
              link={work.link}
              onMouseEnter={() =>
                setHovered((prevHovered) =>
                  prevHovered.map((h, i) => (i === index ? true : h))
                )
              }
              onMouseLeave={() =>
                setHovered((prevHovered) =>
                  prevHovered.map((h, i) => (i === index ? false : h))
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

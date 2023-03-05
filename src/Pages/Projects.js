import React, { useState } from "react";
import Project from "../components/Project";
import previousWork from "../utils/previous-work.json";
import courthouseImage from "../assets/images/the-court-house.jpg";
import courthouseGif from "../assets/images/the-court-house.gif";
import openhousepresentsImage from "../assets/images/open-house-presents.jpg";
import openhousepresentsGif from "../assets/images/open-house-presents.gif";
import openhousefestivalImage from "../assets/images/open-house-festival.jpg";
import openhousefestivalGif from "../assets/images/open-house-festival.gif";
import riedImage from "../assets/images/ried.jpg";
import riedGif from "../assets/images/ried.gif";
import guillemotImage from "../assets/images/the-guillemot.jpg";
import guillemotGif from "../assets/images/the-guillemot.gif";
import morningGloryImage from "../assets/images/morning-glory.jpg";
import morningGloryGif from "../assets/images/morning-glory.gif";
import maryAnnImage from "../assets/images/mary-ann-mccracken.jpg";
import maryAnnGif from "../assets/images/mary-ann-mccracken.gif";
import greatPlaceImage from "../assets/images/great-place-north-belfast.jpg";
import greatPlaceGif from "../assets/images/great-place-north-belfast.gif";
import proparamedicsImage from "../assets/images/proparamedics.jpg";
import proparamedicsGif from "../assets/images/proparamedics.gif";

const images = {
  "the-court-house": courthouseImage,
  "open-house-presents": openhousepresentsImage,
  "open-house-festival": openhousefestivalImage,
  ried: riedImage,
  "the-guillemot": guillemotImage,
  "morning-glory": morningGloryImage,
  "mary-ann-mccracken": maryAnnImage,
  "great-place-north-belfast": greatPlaceImage,
  proparamedics: proparamedicsImage,
};
const gif = {
  "the-court-house": courthouseGif,
  "open-house-presents": openhousepresentsGif,
  "open-house-festival": openhousefestivalGif,
  ried: riedGif,
  "the-guillemot": guillemotGif,
  "morning-glory": morningGloryGif,
  "mary-ann-mccracken": maryAnnGif,
  "great-place-north-belfast": greatPlaceGif,
  proparamedics: proparamedicsGif,
};

function Projects() {
  const [hovered, setHovered] = useState(previousWork.map(() => false));

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-primary-900 dark:text-primary-200 pt-10 fluid-4xl">
        Past Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 lg:gap-8">
        {previousWork.map((work) => {
          return (
            <Project
              key={work.id}
              title={work.title}
              description={work.description}
              image={hovered[work.id] ? gif[work.image] : images[work.image]}
              imageAlt={work.imageAlt}
              ariaLabel={work.ariaLabel}
              areas={work.areas}
              link={work.link}
              onMouseEnter={() =>
                setHovered((prevHovered) =>
                  prevHovered.map((h, i) => (i === work.id ? true : h))
                )
              }
              onMouseLeave={() =>
                setHovered((prevHovered) =>
                  prevHovered.map((h, i) => (i === work.id ? false : h))
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

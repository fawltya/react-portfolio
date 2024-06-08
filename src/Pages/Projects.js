import React, { useState } from "react";
import { Link } from "react-router-dom";
import Project from "../components/Project";
import previousWork from "../utils/previous-work.json";
import courthouseImage from "../assets/images/the-court-house.jpg";
import courthouseGif from "../assets/images/the-court-house.gif";
import openhousepresentsImage from "../assets/images/open-house-presents.jpg";
import openhousepresentsGif from "../assets/images/open-house-presents.gif";
import openhousefestivalImage from "../assets/images/open-house-festival-23.jpg";
import openhousefestivalGif from "../assets/images/open-house-festival-23.gif";
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
import DLDFundImage from "../assets/images/DLD-Fund.jpg";
import DLDFundGif from "../assets/images/DLD-Fund.gif";
import grainImage from "../assets/images/dissolve-noise-texture.png";

const images = {
  "the-court-house": courthouseImage,
  "open-house-presents": openhousepresentsImage,
  "open-house-festival-23": openhousefestivalImage,
  ried: riedImage,
  "the-guillemot": guillemotImage,
  "morning-glory": morningGloryImage,
  "mary-ann-mccracken": maryAnnImage,
  "great-place-north-belfast": greatPlaceImage,
  "DLD-fund": DLDFundImage,
};
const gif = {
  "the-court-house": courthouseGif,
  "open-house-presents": openhousepresentsGif,
  "open-house-festival-23": openhousefestivalGif,
  ried: riedGif,
  "the-guillemot": guillemotGif,
  "morning-glory": morningGloryGif,
  "mary-ann-mccracken": maryAnnGif,
  "great-place-north-belfast": greatPlaceGif,
  "DLD-fund": DLDFundGif,
};

function Projects() {
  const [hovered, setHovered] = useState(previousWork.map(() => false));

  return (
    <>
      <div
        className="absolute inset-0 hero-after"
        style={{ backgroundImage: `url(${grainImage})` }}
      ></div>
      <div className="flex flex-col items-center p-5 bg-gradient-to-tr from-secondary-200 via-secondary-100 to-secondary-200 dark:from-secondary-800 dark:via-secondary-700 dark:to-secondary-900">
        <h1 className="text-primary-900 dark:text-primary-100 pt-10 fluid-3xl ">
          Past Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 lg:gap-8">
          {previousWork.map((work) => {
            return (
              <Project
                key={work.id}
                title={work.title}
                description={work.description}
                // Change image to gif when hovering
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
        <div>
          <p className="text-primary-900 dark:text-primary-100">
            Plus many more...<Link to="/contact">Get in touch</Link> to discuss
            your project!
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;

import React from "react";

function Project(props) {
  return (
    <div className="bg-white shadow rounded-lg">
      <a href={props.link} className="block overflow-hidden">
        <img
          src={props.image}
          alt={props.imageAlt}
          aria-label={props.ariaLabel}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
          className=""
        />
      </a>
      <div className="p-4">
        <h4 className="text-lg font-bold">{props.title}</h4>
        <p className="text-gray-600 mt-2">{props.description}</p>
      </div>
      <div className="px-4 pb-4 pt-2 flex justify-between items-center">
        <p className="text-gray-500 text-sm">{props.areas}</p>
        <a
          href={props.link}
          target="_blank"
          className="px-4 py-2 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-all duration-300 ease-out"
        >
          Visit
        </a>
      </div>
    </div>
  );
}

export default Project;

import React from "react";

function Project(props) {
  return (
    <div className="dark:bg-gray-900 shadow rounded-lg text-white">
      <a href={props.link} target="_blank block overflow-hidden">
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
        <a href={props.link} target="_blank">
          <h4 className="text-lg font-bold">{props.title}</h4>
        </a>
        <p className="text-gray-300 mt-2">{props.description}</p>
      </div>
      <div className="px-4 pb-4 pt-2 flex justify-between items-center">
        <p className="text-gray-200 text-sm">{props.areas}</p>
        <a
          href={props.link}
          target="_blank"
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-navy-600 transition-all duration-300 ease-out"
        >
          Visit
        </a>
      </div>
    </div>
  );
}

export default Project;

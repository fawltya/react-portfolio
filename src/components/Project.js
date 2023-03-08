import React from "react";

function Project(props) {
  return (
    <div className=" dark:bg-secondary-500 bg-secondary-100 shadow rounded-lg dark:text-secondary-100 text-secondary-800">
      <a href={props.link} target="_blank block overflow-hidden">
        <img
          src={props.image}
          alt={props.imageAlt}
          aria-label={props.ariaLabel}
          onMouseEnter={props.onMouseEnter} // Change .png to .gif
          onMouseLeave={props.onMouseLeave} // Change back
          className=""
        />
      </a>
      <div className="px-4">
        <div className="pt-5">
          <a href={props.link} target="_blank">
            <h4 className="text-lg font-bold">{props.title}</h4>
          </a>
          <p className="dark:text-secondary-300 text-secondary-600">
            {props.description}
          </p>
        </div>
        <div className="justify-center w-100 py-3">
          <hr className="dark:border-secondary-300 border-secondary-700 w-100 " />
        </div>
        <div className=" pb-3 flex justify-between items-center">
          <p className="dark:text-secondary-200 text-secondary-700 text-xs">
            {props.areas}
          </p>
          <a
            href={props.link}
            target="_blank"
            className="px-4 py-2 bg-primary-600 hover:bg-primary-500 text-secondary-100 font-medium rounded-lg hover:bg-navy-600 transition-all duration-300 ease-out"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

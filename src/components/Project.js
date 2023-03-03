import React from "react";

function Project(props) {
  const { title, image, imageAlt, ariaLabel, description, areas, link } = props;
  return (
    <div className="card col-12 col-md-6 col-lg-6 col-xl-4 bg-secondary p-3 m-lg-2 text-light">
      <div className="d-flex justify-content-center align-items-center">
        <a href={props.link}>
          <img
            src={props.image}
            className="card-img-top"
            alt={props.imageAlt}
          />
        </a>
      </div>
      <div className="card-body pl-0">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">{props.description}</p>
      </div>
      <ul className="list-group list-group-flush row d-flex flex-column flex-xl-row justify-items-center align-items-center justify-content-between">
        <li className="list-group-item bg-primary col-12 col-xl-6 small">
          {props.areas}
        </li>
        <li className="list-group-item bg-primary bg-success col-12 col-xl-6">
          <a href={props.link} target="_blank" className="card-link text-white">
            Website Link
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Project;

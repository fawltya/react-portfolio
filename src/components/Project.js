import React from "react";

function Project(props) {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <a
          href="https://riedesign.org/"
          className="mag-div"
          data-toggle="modal"
          data-target=".lightbox-ried"
        >
          <img
            src="./images/ried.jpg"
            className="card-img-top"
            alt="Re-Imagining Engineering Design Website"
          />
        </a>
        <img
          src="./images/magnifying-glass-solid.svg"
          className="magnify position-absolute"
          alt="magnifying glass"
        />
      </div>
      <div className="modal fade lightbox-ried">
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <img
              src="./images/ried-l.jpg"
              alt="Re-Imagining Engineering Design Website"
            />
            <a
              href="https://riedesign.org/"
              target="_blank"
              className="text-center bg-secondary p-4 text-light text-uppercase"
            >
              Re-Imagining Engineering Design Website
            </a>
          </div>
        </div>
      </div>
      <div className="card-body pl-0">
        <h4 className="card-title">Re-Imagining Engineering Design</h4>
        <p className="card-text">University led engineering research project</p>
      </div>
      <ul className="list-group list-group-flush row d-flex flex-column flex-xl-row justify-items-center align-items-center justify-content-between">
        <li className="list-group-item bg-primary col-12 col-xl-6 small">
          Website, Branding
        </li>
        <li className="list-group-item bg-primary bg-success col-12 col-xl-6">
          <a
            href="https://riedesign.org/"
            target="_blank"
            className="card-link text-white"
          >
            Website Link
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Project;

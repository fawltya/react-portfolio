import React from "react";

function About() {
  return (
    <section id="about" className="bg-dark container-fluid">
      <div className="row p-5 d-flex justify-content-center align-items-center">
        <div className="jumbotron container row align-items-center mx-auto col-md-8 col-lg-8 col-sm-12">
          <div className="col-md-9 col-sm-12">
            <h2 className="display-2">About Me</h2>
            <p className="lead">Hi, I'm Seamus, a freelance web designer.</p>
            <hr className="my-3" />
            <p>
              I create attractive and interactive websites to show off the best
              of your business or organisation.
            </p>
            <a
              className="btn btn-primary btn-lg"
              href="#portfolio"
              role="button"
            >
              Learn more
            </a>
          </div>
          <div className="col-md-3">
            <img src="./images/seamus.jpg" className="img-fluid mt-3 mt-md-0" />
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <h2 className="display-2 text-white">Skills</h2>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Responsive Web Design
              <div>
                <span className="badge badge-primary badge-pill">HTML</span>
                <span className="badge badge-danger badge-pill">CSS</span>
                <span className="badge badge-warning badge-pill">
                  Bootstrap
                </span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Bespoke Website Functionalities
              <div>
                <span className="badge badge-success badge-pill">JS</span>
                <span className="badge badge-secondary badge-pill">PHP</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              CMS Design (Wordpress)
              <div>
                <span className="badge badge-primary badge-pill">HTML</span>
                <span className="badge badge-danger badge-pill">CSS</span>
                <span className="badge badge-success badge-pill">JS</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Graphic & Brand Design
              <div>
                <span className="badge badge-info badge-pill">Adobe Suite</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

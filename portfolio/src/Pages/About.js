import React from "react";

function About() {
  return (
    <section id="about" class="bg-dark container-fluid">
      <div class="row p-5 d-flex justify-content-center align-items-center">
        <div class="jumbotron container row align-items-center mx-auto col-md-8 col-lg-8 col-sm-12">
          <div class="col-md-9 col-sm-12">
            <h2 class="display-2">About Me</h2>
            <p class="lead">Hi, I'm Seamus, a freelance web designer.</p>
            <hr class="my-3" />
            <p>
              I create attractive and interactive websites to show off the best
              of your business or organisation.
            </p>
            <a class="btn btn-primary btn-lg" href="#portfolio" role="button">
              Learn more
            </a>
          </div>
          <div class="col-md-3">
            <img src="./images/seamus.jpg" class="img-fluid mt-3 mt-md-0" />
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12">
          <h2 class="display-2 text-white">Skills</h2>
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Responsive Web Design
              <div>
                <span class="badge badge-primary badge-pill">HTML</span>
                <span class="badge badge-danger badge-pill">CSS</span>
                <span class="badge badge-warning badge-pill">Bootstrap</span>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Bespoke Website Functionalities
              <div>
                <span class="badge badge-success badge-pill">JS</span>
                <span class="badge badge-secondary badge-pill">PHP</span>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              CMS Design (Wordpress)
              <div>
                <span class="badge badge-primary badge-pill">HTML</span>
                <span class="badge badge-danger badge-pill">CSS</span>
                <span class="badge badge-success badge-pill">JS</span>
              </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Graphic & Brand Design
              <div>
                <span class="badge badge-info badge-pill">Adobe Suite</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

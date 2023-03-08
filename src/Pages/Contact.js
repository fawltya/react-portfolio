import React from "react";
import Form from "../components/Form";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-180px)] flex-col p-10 md:gap-5 md:px-20">
      <h1 className="flex justify-center items-center fluid-3xl text-primary-900 dark:text-primary-100">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-stretch md:gap-5">
        <Form />
        <div className="flex flex-row md:flex-col md:justify-around justify-center mt-3 mb-2">
          <SocialIcon
            url="https://github.com/fawltya"
            className="fill-alt-700 dark:fill-alt-200 hover:fill-alt-500 dark:hover:fill-alt-100"
            bgColor="inherit"
            // Create shape by unequal h/w
            style={{ height: 60, width: 80 }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/seamus-barnett-307161261"
            className="fill-alt-700 dark:fill-alt-200 hover:fill-alt-500 dark:hover:fill-alt-100"
            bgColor="inherit"
            style={{ height: 60, width: 80 }}
            target="_blank"
          />
          <SocialIcon
            url="mailto:seamus@designbarn.co.uk"
            className="fill-alt-700 dark:fill-alt-200 hover:fill-alt-500 dark:hover:fill-alt-100"
            bgColor="inherit"
            style={{ height: 60, width: 80 }}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

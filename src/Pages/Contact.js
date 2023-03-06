import React from "react";
import Form from "../components/Form";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-180px)] flex-col p-10 gap-10 px-20">
      <h3 className="flex justify-center items-center text-primary-900 dark:text-primary-100">
        Contact Me
      </h3>

      <div className="flex flex-row justify-center items-stretch">
        <Form />
        <div className="flex flex-col justify-between mt-3 mb-2">
          <SocialIcon
            url="https://github.com/fawltya"
            className="fill-alt-700 dark:fill-alt-200 hover:fill-alt-500 dark:hover:fill-alt-100"
            bgColor="inherit"
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

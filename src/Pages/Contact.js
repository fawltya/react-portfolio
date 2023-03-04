import React from "react";
import Form from "../components/Form";

function Contact() {
  return (
    <div className="flex w-50 justify-center bg-slate-700 flex-col">
      <h3 className="flex justify-center items-center">Contact Me</h3>
      <div className="flex flex-row justify-center items-center">
        <div>
          <p>github</p>
          <p>email</p>
          <p>linkedin</p>
        </div>
        <div className="flex flex-col">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;

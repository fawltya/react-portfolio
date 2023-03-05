// import React, { Component } from "react";
const Form = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <form action="" method="POST" className="flex flex-col p-2">
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="p-1 border-2"
          ></input>
          <input
            type="text"
            name="email"
            placeholder="hello@example.com"
            className="p-1"
          ></input>
          <textarea
            name="message"
            placeholder="Type your message here."
            className="p-1"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
import React from "react";
// import backgroundImage from "./background.jpg";
import grainImage from "../assets/images/dissolve-noise-texture.png";

function Background() {
  return (
    <div className="flex flex-col h-screen">
      <div className="overlay"></div>
      <div className="hero flex justify-center items-center w-full h-screen">
        <div
          className="hero-after"
          style={{ backgroundImage: `url(${grainImage})` }}
        ></div>
        <h1 className="headerText text-white text-3xl z-5">Hello World!</h1>
      </div>
      <div className="section2 flex justify-center items-center h-screen bg-red-500">
        <p className="text-white">This is section 2</p>
      </div>
      <div className="bottomArrow absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 border-dotted border-4 border-white bg-transparent rotate-45 z-5"></div>
    </div>
  );
}

export default Background;

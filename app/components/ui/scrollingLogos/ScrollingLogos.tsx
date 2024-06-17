import React from "react";
import Image from "next/image";
import sass from "../../../assets/tech/sass.svg";
import js from "../../../assets/tech/javascript.svg";
import ts from "../../../assets/tech/typescript.svg";
import css3 from "../../../assets/tech/css3.svg";
import html5 from "../../../assets/tech/html.svg";
import handlebars from "../../../assets/tech/handlebars.svg";
import bootstrap from "../../../assets/tech/bootstrap.svg";
import react from "../../../assets/tech/react.svg";
import redux from "../../../assets/tech/redux.svg";
import tailwind from "../../../assets/tech/tailwindcss.svg";
import nextjs from "../../../assets/tech/nextjs.svg";

const techLogos = [
  tailwind,
  bootstrap,
  nextjs,
  ts,
  js,
  html5,
  css3,
  react,
  redux,
  sass,
  handlebars,
];

const ScrollingLogos = () => {
  const renderTechLogos = () => {
    return techLogos.map((logo, index) => (
      <Image
        key={index}
        loading="lazy"
        src={logo}
        className="lg:h-20 lg:w-20 md:h-16 md:w-16 h-10 w-10 max-w-none"
        alt={`Image ${index + 1}`}
      />
    ));
  };

  return (
    <div className="flex overflow-hidden lg:space-x-10 sm:space-x-4 group">
      <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 animate-loop-scroll group-hover:paused">
        {renderTechLogos()}
      </div>
      <div
        className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 animate-loop-scroll group-hover:paused"
        aria-hidden="true"
      >
        {renderTechLogos()}
      </div>
    </div>
  );
};

export default ScrollingLogos;

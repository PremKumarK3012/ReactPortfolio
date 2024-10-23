import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import Nodejs from "../assets/Node.js.png";
import MongoDB from "../assets/mongodb.png";
import mysql from "../assets/sql.png";
import tailwind from "../assets/tailwind.png";

const Skills = ({ isDark }) => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: Nodejs,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: MongoDB,
      title: "MongoDb",
      style: "shadow-pink-400",
    },
    {
      id: 9,
      src: mysql,
      title: "My SQL",
      style: "shadow-pink-400",
    },
  ];

  return (
    <section
      id="skills"
      className={`${
        isDark
          ? "bg-gradient-to-b from-gray-800 via-gray-800 to-gray-700  text-white"
          : "bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-black"
      }`}
    >
      <div className="w-full h-auto">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
          <div data-aos="fade-down" className="text-center">
            <h1 className="text-4xl font-bold font-head  mt-16 text-blue-600">
              Skills
            </h1>

            <p className="text-center mt-2">
              These are the technologies I've worked with
            </p>
          </div>
          {/* <div className="border-b-4 rounded-sm  mt-2"></div> */}

          <div
            className="w-full grid xs:grid-cols-1 mb:grid-cols-2 md:grid-cols-3 gap-8 text-center mt-5"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

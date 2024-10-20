import React from "react";
import heroImg from "/src/assets/p2.png";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";

const Home = ({ isDark }) => {
  return (
    <section id="home" className="xs:mt-16 md:mt-0">
      <div
        name="home"
        className={`h-screen w-full ${
          isDark
            ? "bg-gradient-to-b from-black via-black to-gray-800  text-white"
            : "bg-zinc-700 "
        }`}
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
          <div
            className="flex flex-col justify-center h-full"
            data-aos="zoom-in-right"
          >
            <h2 className="text-4xl  font-bold text-white">
              I'm a Full Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              Innovative Software Developer crafting cutting-edge digital
              solutions,blending creativity with technical experience ideas into
              seamless, high-performing applications.
            </p>

            <div>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer">
                Download CV{" "}
                <span className=" group-hover:rotate-90 duration-300">
                  <HiOutlineArrowRightOnRectangle size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>

          <div data-aos="zoom-in">
            <img
              src={heroImg}
              alt="hero"
              className=" mx-auto w-4/5 border-2  rounded-full shadow-lg shadow-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

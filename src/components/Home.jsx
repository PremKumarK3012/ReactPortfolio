import heroImg from "/src/assets/p2.png";
import React from "react";
import { TbFileArrowRight } from "react-icons/tb";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = ({ isDark }) => {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Web Developer"],
    loop: true, // Use true or number to define loops, {} was incorrect
  });

  return (
    <section id="home" className="xs:mt-16 md:mt-0">
      <div
        name="home"
        className={`h-screen w-full ${
          isDark
            ? "bg-gradient-to-b from-black via-black to-gray-800  text-white"
            : "bg-gradient-to-b from-blue-200 via-blue-200 to-blue-300 text-black"
        }`}
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div
            className="flex flex-col justify-center h-full"
            data-aos="fade-right"
          >
            <h2 className="text-4xl font-bold ">
              I'm a <span className="text-blue-500">{text}</span>
              <Cursor />
            </h2>
            <p
              className={`py-4 max-w-md ${
                isDark ? "text-gray-400" : "text-gray-900"
              }`}
            >
              Innovative Software Developer crafting cutting-edge digital
              solutions, blending creativity with technical experience to
              transform ideas into seamless, high-performing applications.
            </p>

            <div>
              <a
                href="https://drive.google.com/file/d/1_sx72frTGPw0AVnc6xcYE6aJOzgvAYmK/view?usp=sharing"
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800 cursor-pointer"
              >
                Download CV{" "}
                <span className="group-hover:rotate-90 duration-300">
                  <TbFileArrowRight size={25} className="ml-1" />
                </span>
              </a>
            </div>
          </div>

          <div data-aos="zoom-in">
            <img
              src={heroImg}
              alt="hero"
              className="mx-auto w-4/5 border-2 rounded-full shadow-lg shadow-blue-500 mb-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

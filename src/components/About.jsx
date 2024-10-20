import React from "react";
import pro from "../assets/about-im.png";

const About = () => {
  return (
    <section id="about">
      <div name="about" className="w-full h-auto text-white" data-aos="zoom-in">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center h-full px-4">
          {/* Heading */}
          <div className="text-center">
            <h1 data-aos="fade-down" className="text-4xl font-bold mt-16">
              About Me
            </h1>
            <div
              className="border-b-4 rounded-sm mx-auto mt-2"
              data-aos="fade-down"
            ></div>
          </div>

          {/* Image */}
          <div className="mt-5">
            <img
              src={pro}
              alt="img"
              className="rounded-full w-48 h-48 border-2 border-white"
            />
          </div>

          {/* Text Content */}
          <div className="mt-5 text-center ">
            {/* Paragraphs */}
            <p className="text-sm sm:text-base md:text-lg mb-4">
              Hello! My name is Prem Kumar, and I'm a passionate full-stack
              developer. I graduated with a degree in Electrical and Electronics
              Engineering and have been honing my skills in web development ever
              since.
            </p>

            <p className="text-sm sm:text-base md:text-lg mb-4">
              I'm comfortable working with a range of technologies, including
              HTML, CSS, JavaScript, and various frameworks such as Bootstrap
              and React. My experience also includes working with backend
              technologies like Node.js and databases like MySQL and MongoDB.
            </p>

            <p className="text-sm sm:text-base md:text-lg mb-4">
              I love learning new things and am always seeking to expand my
              skill set. I'm a dedicated team player and enjoy collaborating
              with others to achieve a common goal. In my free time, you can
              find me tinkering with code and exploring new projects.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-center mt-5">
              If you're interested in working together, feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

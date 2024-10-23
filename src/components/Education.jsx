import React from "react";

import stpauls from "../assets/stpauls.jpeg";
import kalai from "../assets/kalai.png";
import clg from "../assets/clg.png";
import wizInoaImg from "../assets/wiz.jpg";

const Education = ({ isDark }) => {
  return (
    <section
      id="education"
      className={`overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-gray-800 via-gray-800 to-gray-700  text-white"
          : "bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-black"
      }`}
    >
      <div className="flex justify-center font-bold text-3xl">
        <div>
          <h1 data-aos="fade-down" className="mt-20 font-head">
            Path to <span className="text-blue-700">Mastery</span>
          </h1>
        </div>
      </div>

      <div
        className="timeline"
        data-aos="flip-left"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0"
      >
        {/* First Education Block */}
        <div className="container left-container">
          <img src={stpauls} alt="St.Pauls School" />
          <div className="text-box">
            <h2>St.Pauls Matriculation Higher Secondary School</h2>
            <small className="text-blue-700">2018-2019</small>
            <p>I successfully completed my SSLC with a score of 78%.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* Second Education Block */}
        <div className="container right-container">
          <img src={kalai} alt="Sri Kalaivani School" />
          <div className="text-box">
            <h2 className="">
              Sri Kalaivani Matriculation Higher Secondary School
            </h2>
            <small className="text-blue-700">2020-2021</small>
            <p>I successfully completed my SSC with a score of 82%.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        {/* Third Education Block */}
        <div className="container left-container">
          <img src={clg} alt="Sri Ramasamy Naidu Memorial College" />
          <div className="text-box">
            <h2 className="t">Sri Ramasamy Naidu Memorial College</h2>
            <small className="text-blue-700">2021-2024</small>
            <p>
              I graduated with a B.Sc. in Computer Science, achieving a score of
              65%.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* Fourth Education Block */}
        <div className="container right-container">
          <img src={wizInoaImg} alt="Wiz Inoa Internship" />
          <div className="text-box">
            <h2>Intern At Wiz Inoa</h2>
            <small className="text-blue-700">2024</small>
            <p>I am currently doing a MERN stack internship in Madurai.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

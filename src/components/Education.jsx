import React from "react";

import stpauls from "../assets/stpauls.jpeg";
import kalai from "../assets/kalai.png";
import clg from "../assets/clg.png";
import wizInoaImg from "../assets/wiz.jpg";

const Education = () => {
  return (
    <section id="education" className="overflow-hidden">
      <div className="flex justify-center font-bold text-3xl">
        <div>
          <h1 data-aos="fade-down" className="mt-20 text-white">
            Education
          </h1>
          <div className="h1-bor border-2" data-aos="fade-down"></div>
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
            <h2 className="text-white">
              St.Pauls Matriculation Higher Secondary School
            </h2>
            <small>2018-2019</small>
            <p>I successfully completed my SSLC with a score of 78%.</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        {/* Second Education Block */}
        <div className="container right-container">
          <img src={kalai} alt="Sri Kalaivani School" />
          <div className="text-box">
            <h2 className="text-white">
              Sri Kalaivani Matriculation Higher Secondary School
            </h2>
            <small>2020-2021</small>
            <p>I successfully completed my SSC with a score of 82%.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        {/* Third Education Block */}
        <div className="container left-container">
          <img src={clg} alt="Sri Ramasamy Naidu Memorial College" />
          <div className="text-box">
            <h2 className="text-white">Sri Ramasamy Naidu Memorial College</h2>
            <small>2021-2024</small>
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
            <h2 className="text-white">Intern At Wiz Inoa</h2>
            <small>2024</small>
            <p>I am currently doing a MERN stack internship in Madurai.</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

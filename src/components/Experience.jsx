import React from "react";
import emp from "../assets/emp.jpg";
import port from "../assets/port.jpg";
import weather from "../assets/weather.jpg";
import profile from "../assets/profile.jpg";
import qr from "../assets/qr.jpg";
import todo from "../assets/todo.jpg";

const Experience = () => {
  return (
    <>
      <section id="experience">
        <div className="flex flex-col min-h-screen items-center justify-center">
          <div className="text-center text-4xl text-white mt-20 font-bold">
            <h1 data-aos="fade-down">Experience</h1>
            <div
              className="border-b-4 rounded-sm mx-auto mt-2"
              data-aos="fade-down"
            ></div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
            <div
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="50"
              data-aos-offset="0"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={emp}
                  alt="Beauty"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Employee Management
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Built a comprehensive Employee Management system utilizing the
                  MERN stack to implement full CRUD functionality for efficient
                  employee data management.
                </p>
                <a
                  href="https://prem-emp.netlify.app/"
                  className="rounded-full bg-neutral-900 hover:bg-white hover:text-black py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  See Project
                </a>
              </div>
            </div>

            <div
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="150"
              data-aos-offset="0"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={port}
                  alt="Beyond Builder"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Portfolio
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Developed a responsive portfolio website utilizing HTML, CSS,
                  and JavaScript, showcasing my skills and projects with
                  interactive elements for enhanced user engagement.
                </p>
                <a
                  href="https://prempk.netlify.app/"
                  className="rounded-full bg-neutral-900  hover:bg-white hover:text-black py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More
                </a>
              </div>
            </div>

            <div
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="200"
              data-aos-offset="0"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={weather}
                  alt="Shooting Star"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Weather App
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Created a dynamic weather application using React that
                  provides real-time weather updates and forecasts by
                  integrating with a weather API, featuring an intuitive user
                  interface for easy navigation.
                </p>
                <a
                  href="https://reactpkweatherapp.netlify.app"
                  className="rounded-full bg-neutral-900  hover:bg-white hover:text-black py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More
                </a>
              </div>
            </div>

            <div
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="250"
              data-aos-offset="0"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={profile}
                  alt="Beauty"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Profile Card
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Developed a profile card component in React that showcases
                  user information and skills, featuring interactive elements
                  and smooth animations for an engaging user experience.
                </p>
                <a
                  href="https://profilecardpk.netlify.app/"
                  className="rounded-full bg-neutral-900  hover:bg-white hover:text-black py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More
                </a>
              </div>
            </div>

            <div
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={qr}
                  alt="Beauty"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  QR Generator
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Created an intuitive QR code generator using React, allowing
                  users to easily input data and generate customized QR codes in
                  real-time, enhancing accessibility and user engagement.
                </p>
                <a
                  href="https://qrcodegeneratorpk.netlify.app/"
                  className="rounded-full bg-neutral-900  hover:bg-white hover:text-black py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More
                </a>
              </div>
            </div>

            <div
              className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="350"
              data-aos-offset="0"
            >
              <div className="h-96 w-72">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={todo}
                  alt="Beauty"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  ToDo List
                </h1>
                <p className="mb-16 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Developed a to-do list application using React, featuring user
                  authentication, task categorization, and real-time updates.
                </p>
                <a
                  href="https://tolists03.netlify.app"
                  className="rounded-full bg-neutral-900  hover:bg-white hover:text-black py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;

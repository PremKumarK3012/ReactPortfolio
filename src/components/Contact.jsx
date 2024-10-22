import React from "react";
import contact from "../assets/contact.svg";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = ({ isDark }) => {
  return (
    <>
      <section
        id="contact"
        className={`${
          isDark
            ? "bg-gradient-to-b from-gray-800 via-gray-800 to-gray-700  text-white"
            : "bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-black"
        }`}
      >
        <div className="flex flex-col items-center justify-between">
          <div>
            <h1
              data-aos="fade-down"
              className="mt-20 text-4xl font-head font-bold"
            >
              Get In <span className="text-blue-500">Touch </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-evenly mt-16 p-5">
          <div className=" ">
            <img src={contact} alt="con" className="h-96" />
          </div>
          <div className="flex flex-col xs:mt-6 md:mt-0 md:ml-4 lg:ml-0">
            {/* Email Card */}
            <div className="bg-gray-700 shadow-md rounded-lg p-6 max-w-sm w-full flex items-center transform transition hover:-translate-y-2 hover:scale-105 shadow-blue-500 duration-300">
              <MdEmail className="text-blue-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-white">Email</h2>
                <p className="text-gray-300">premkpk2004@gmail.com</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gray-700 shadow-md rounded-lg p-6 max-w-sm mt-5 w-full flex items-center transform transition hover:-translate-y-2 hover:scale-105 shadow-blue-500 duration-300">
              <MdPhone className="text-green-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-white">Phone</h2>
                <p className="text-gray-300">+91 6374580596</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-gray-700 shadow-md rounded-lg p-6 max-w-sm w-full mt-5 flex items-center transform transition hover:-translate-y-2 hover:scale-105 shadow-blue-500 duration-300">
              <MdLocationOn className="text-red-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-white">Address</h2>
                <p className="text-gray-300">
                  1/1 Thirupathy Raja Street, Kalugumalai
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1 className=" mt-5 font-bold text-center text-3xl ">
          Find Me on Social's
        </h1>
        <div className="flex items-center justify-center mt-5 ">
          <a
            href="https://www.linkedin.com/in/prem04/"
            className="rounded-full bg-stone-900 px-3 py-3 text-blue-600 transition ease-in-out delay-150 hover:bg-gray-800 hover:text-emerald-500 hover:shadow-lg hover:shadow-blue-500 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <FaLinkedin size={24} className="text-blue-500" />
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?igsh=qxo5a0ciz0lv&utm_content=5zloir3"
            className="rounded-full bg-stone-900 px-3 py-3 ml-2 text-pink-500 transition ease-in-out delay-150 hover:bg-gray-800  hover:shadow-lg hover:shadow-blue-500 hover:-translate-y-1 hover:scale-110 duration-300 "
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            className="rounded-full bg-stone-900 px-3 py-3 ml-2 text-green-500 transition ease-in-out delay-150 hover:bg-gray-800 hover:text-emerald-500 hover:shadow-lg hover:shadow-blue-500 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://github.com/PremKumarK3012"
            className="rounded-full bg-stone-900 px-3 py-3 ml-2 text-white transition ease-in-out delay-150 hover:bg-gray-800 hover:text-emerald-500 hover:shadow-lg hover:shadow-blue-500 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <footer
          className={` text-white py-4 text-center mt-5 ${
            isDark
              ? "bg-gradient-to-r from-slate-600 to-gray-700 text-white"
              : "bg-blue-400 text-gray-700 "
          }`}
        >
          <p className="text-sm">© 2024 Prem Kumar. All Rights Reserved.</p>
        </footer>
      </section>
    </>
  );
};

export default Contact;

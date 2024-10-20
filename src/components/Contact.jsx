import React from "react";
import contact from "../assets/contact.svg";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="flex flex-col items-center justify-between">
          <div>
            <h1
              data-aos="fade-down"
              className="mt-20 text-white text-4xl  font-bold"
            >
              Contact
            </h1>
            <div className="h1-bor border-2 mt-1" data-aos="fade-down"></div>
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
      </section>
    </>
  );
};

export default Contact;

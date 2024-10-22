import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { MdWbSunny, MdDarkMode } from "react-icons/md";

const Navbar = ({ isDark, setIsDark }) => {
  const [nav, setNav] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    setIsDark(!isDark);
    localStorage.setItem("theme", newTheme);
  };

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    { id: 4, link: "projects" },
    { id: 5, link: "education" },
    { id: 6, link: "contact" },
  ];

  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <>
      <div
        className={`flex justify-between items-center w-full h-16  fixed px-4 top-0 z-20  ${
          isDark
            ? "bg-gradient-to-r from-slate-600 to-gray-700 text-white"
            : "bg-blue-300 text-gray-700 "
        }`}
      >
        <div>
          <h1 className="text-5xl font-name ml-2 items-center mt-1">Prem</h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="style px-4 cursor-pointer capitalize font-medium  hover:text-gray-300 scale-105 duration-200"
            >
              <Link to={link} smooth duration={500} onClick={handleLinkClick}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer capitalize py-4 text-4xl  hover:text-gray-300 scale-105 duration-200"
              >
                <Link to={link} smooth duration={500} onClick={handleLinkClick}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <button onClick={toggleTheme} className=" flex items-center">
          {isDark ? (
            <>
              <MdWbSunny size={24} className="mr-2" />
            </>
          ) : (
            <>
              <MdDarkMode size={24} className="mr-2" />
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;

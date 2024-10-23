import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileAlt, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} className="text-blue-400" />
        </>
      ),
      href: "https://www.linkedin.com/in/prem04/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} className="text-black" />
        </>
      ),
      href: "https://github.com/PremKumarK3012",
    },
    {
      id: 3,
      child: (
        <>
          Instagram <FaInstagram size={30} className=" text-pink-500" />
        </>
      ),
      href: "https://www.instagram.com/invites/contact/?igsh=qxo5a0ciz0lv&utm_content=5zloir3",
    },
    {
      id: 4,
      child: (
        <>
          Resume <FaFileAlt size={30} className="text-gray-200" />
        </>
      ),
      href: "https://drive.google.com/file/d/1_sx72frTGPw0AVnc6xcYE6aJOzgvAYmK/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-700" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

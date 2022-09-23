import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "../hook/useDarkMode";

const Footer = () => {
  return (
    <div className="text-black dark:text-white font-merriweather pb-10 pl-28">
      <div className="flex justify-between">
        <h1 className="text-lg">Copyright &copy; 2022 Bara Kharseh </h1>
        <div className="text-3xl pr-28">
          <a
            href="https://github.com/BaraKharseh"
            target="_blank"
            className="hover:text-gray-500 duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="ml-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/bara-kharseh-a146b521a"
            target="_blank"
            className="hover:text-blue-500 duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} className="ml-8" />
          </a>
          <button
            onClick={() =>
              (window.location = "mailto:bara.kharseh@mail.utoronto.ca")
            }
            className="hover:text-orange-400 duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className="ml-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

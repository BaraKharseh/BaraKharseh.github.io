import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [helloWorld, setHelloWorld] = useState("Hello, World!");

  // setInterval(() => {
  //   if (helloWorld == "Hello, World!") {
  //     setHelloWorld("👋🏼, 🌍!");
  //   } else {
  //     setHelloWorld("Hello, World!");
  //   }
  // }, 3000);

  return (
    <div
      id="home"
      className="flex h-screen flex-col justify-center items-center"
    >
      <h1 className="md:text-6xl text-2xl dark:text-white text-black font-bold font-merriweather text-center md:mb-7 mb-5">
        {helloWorld}
      </h1>
      <h1 className="md:text-6xl text-2xl dark:text-white text-black font-bold font-merriweather text-center md:mb-7 mb-5">
        My name is Bara Kharseh.
      </h1>
      <div className="md:flex md:space-x-20 space-x-10 md:text-2xl text-md dark:text-white text-black font-merriweather">
        <a
          href="https://github.com/BaraKharseh"
          target="_blank"
          className="hover:text-gray-500 duration-300"
        >
          <FontAwesomeIcon icon={faGithub} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/bara-kharseh-a146b521a"
          target="_blank"
          className="hover:text-blue-500 duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a
          href="https://drive.google.com/file/d/1SNHwKwO7YR1J9EEZznao1XSeWXj0UnQS/view?usp=sharing"
          target="_blank"
          className="hover:text-orange-400 duration-300"
        >
          <FontAwesomeIcon icon={faFile} /> Resume
        </a>
      </div>
    </div>
  );
};

export default Home;

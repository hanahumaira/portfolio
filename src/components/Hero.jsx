import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  const [topLine, setTopLine] = useState("");
  const [currentText, setCurrentText] = useState("");

  const topLines = [
    "You’re finally awake. Let’s explore my work.",
    "Welcome to my corner of the web!",
    "Greetings! I'm thrilled to have you here.",
    "Hi! Thanks for dropping by.",
    "One portfolio to rule them all.",
  ];

  const typewriterTexts = [
    "Software Developer",
    "Tech Enthusiast",
    "AI Learner",
    "Open Source Contributor",
    "Frontend Explorer",
    "Backend Builder",
    "Creative Coder",
    "UI/UX Dreamer",
    "Hackathon Lover",
  ];

  useEffect(() => {
    setTopLine(topLines[Math.floor(Math.random() * topLines.length)]);
  }, []);

  useEffect(() => {
    let i = 0;
    let textPos = 0;
    let currentString = typewriterTexts[i];
    const speed = 100;
    const deleteSpeed = 50;
    const waitTime = 2000;

    function type() {
      setCurrentText(currentString.substring(0, textPos) + "_");
      if (textPos++ === currentString.length) {
        setTimeout(deleteText, waitTime);
      } else {
        setTimeout(type, speed);
      }
    }

    function deleteText() {
      setCurrentText(currentString.substring(0, textPos) + "_");
      if (textPos-- === 0) {
        i = (i + 1) % typewriterTexts.length;
        currentString = typewriterTexts[i];
        setTimeout(type, speed);
      } else {
        setTimeout(deleteText, deleteSpeed);
      }
    }

    type();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center text-white overflow-hidden bg-transparent">
      {/* Left Text Section */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 z-10">
        <h1 className="text-lg md:text-xl mb-4">{topLine}</h1>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
          I'm Hana Humaira.
        </h2>
        <p className="mt-4 text-purple-300 text-lg">{currentText}</p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1wY3jpoQEPFNzLZoXBExz2OODSUWQfkZ4/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-lg 
                      transition-all duration-300 hover:bg-purple-600 
                      hover:shadow-[0_0_15px_rgba(192,132,252,0.8)] hover:scale-105"
          >
            <HiOutlineDocumentText className="text-xl" />
            Resume
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hana-humaira/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg 
                      transition-all duration-300 hover:bg-blue-700 
                      hover:shadow-[0_0_15px_rgba(80,180,255,0.8)] hover:scale-105"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/hanahumaira"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg 
                      transition-all duration-300 hover:bg-gray-900 
                      hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] hover:scale-105"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
        </div>
      </div>

      {/* Right Earth Canvas Section (fixed height like Contact) */}
      <div className="flex-1 flex justify-center items-center relative h-[60vh] md:h-screen w-full">
  <EarthCanvas />
</div>

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-purple-400 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-purple-400 mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default SectionWrapper(Hero, "home");

import React from "react";
import { FaGithub, FaLinkedin, FaGlobe, FaMedium, FaDev } from "react-icons/fa";
import { SectionWrapper } from "../hoc";

const SocialLinks = () => {
  // Dummy links - replace later with your real ones
  const socials = [
    { icon: <FaGithub />, url: "https://github.com/hanahumaira", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/hana-humaira/", label: "LinkedIn" },
  ];

  return (
    <section className="w-11/12 max-w-md mx-auto  rounded-xl p-6 text-center shadow-lg font-mono">
      <h3 className="text-white text-2xl mb-4 bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent">
        FIND ME ON
      </h3>
      <p className="text-gray-300 mb-6">
        Feel free to <span className="text-purple-600 font-semibold">connect</span> with me
      </p>
      <div className="flex justify-center gap-8 mb-8 text-gray-400 text-3xl transition-colors duration-300">
        {socials.map(({ icon, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-purple-600"
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(SocialLinks, "");
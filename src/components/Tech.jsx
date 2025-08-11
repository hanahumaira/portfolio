import React from "react";
import { SectionWrapper } from "../hoc";
import { techCategories } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()} className="mb-10">
        <p className={styles.sectionSubText}>My Tech Stack</p>
        <h2 className={styles.sectionHeadText}>Skills & Tools</h2>
      </motion.div>

      {/* Tech Categories Grid */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", "spring", idx * 0.2, 0.75)}
              className="bg-tertiary p-6 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300"
            >
              {/* Category Title */}
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>

              {/* Tech Items */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                {category.items.map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center text-center hover:text-purple-400 transition-colors"
                  >
                    <tech.icon className="text-4xl mb-2" />
                    <p className="text-xs sm:text-sm">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");

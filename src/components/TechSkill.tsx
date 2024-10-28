import React from "react";
import { motion } from "framer-motion";
import { technicalSkill } from "@/constants";
import { textVariant } from "@/lib/motion";
import Image from "next/image";

interface TechSkillProps {
  profileKey: string;
}

const TechSkill = ({ profileKey }: TechSkillProps) => {
  const technicalSkillData =
    technicalSkill[profileKey as keyof typeof technicalSkill];

  return (
    <div className="px-24 pt-24 pb-20 relative z-50">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] dark:text-dark text-light uppercase tracking-wider text-center">
          The skills I am capable of doing
        </p>
        <h2 className="dark:text-dark text-light font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Technicals.
        </h2>
      </motion.div>

      <motion.div
        variants={textVariant(0.5)}
        className="mt-20 flex flex-wrap w-full justify-center items-center gap-16"
      >
        {technicalSkillData.techs.map((tech, index) => (
          <div key={`${tech.name}_${index}`}>
            <Image src={tech.icon} alt={tech.name} className="w-20 h-20" fill />
            <span className="block dark:text-dark text-light text-center pt-4">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechSkill;

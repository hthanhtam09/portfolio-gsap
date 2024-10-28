import React, { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/constants";
import { textVariant } from "@/lib/motion";
import Image from "next/image";

interface ExperienceProps {
  profileKey: string;
}

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      visible
      contentStyle={{
        border: "1px solid #fff",
        backgroundColor: "unset",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={experience.date}
      className="text-light dark:text-dark"
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            fill
          />
        </div>
      }
    >
      <div>
        <h3 className="text-light dark:text-dark text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-light dark:text-dark text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index: number) => (
          <li
            key={`${point}-${index}`}
            className="text-light dark:text-dark text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: FC<ExperienceProps> = ({ profileKey }) => {
  const experiencesData = experiences[profileKey as keyof typeof experiences];

  return (
    <motion.div className="relative z-50 my-20">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-light dark:text-dark uppercase tracking-wider text-center">
          What I have done so far
        </p>
        <h2 className="text-light dark:text-dark font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Work Experience.
        </h2>
      </motion.div>

      <motion.div variants={textVariant(0.5)} className="mt-10 flex flex-col">
        <VerticalTimeline>
          {experiencesData.experiences.map((experience, index) => (
            <ExperienceCard
              key={`${experience.title}-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </motion.div>
  );
};

export default Experience;

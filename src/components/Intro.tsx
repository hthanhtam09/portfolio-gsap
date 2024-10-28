"use client";

import { profileTamDetail, profileThoDetail } from "@/assets";
import { motion } from "framer-motion";
import { ProfileName } from "@/enums";
import { profileDetail } from "@/constants";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import Card from "./Card";
import { convertPathName } from "@/lib/utils";

const Intro = ({ profileKey }: { profileKey: string }) => {
  const pathProfileName = convertPathName(profileKey);
  const profileImage =
    profileKey === ProfileName.TAM
      ? profileTamDetail
      : profileKey === ProfileName.THO
      ? profileThoDetail
      : null;
  const profileData = profileDetail[profileKey as keyof typeof profileDetail];
  if (!profileData) return null;

  return (
    <div className="relative w-full h-full z-50">
      {profileImage && (
        <motion.div
          initial={{ translateX: 100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.5,
            duration: 2,
          }}
          className="absolute top-0 right-[-25%] z-50 w-full h-full"
        >
          <Image
            src={profileImage.src}
            alt={`Profile ${pathProfileName}`}
            className="w-[100%] h-[100%] object-contain"
            fill
          />
        </motion.div>
      )}

      <div className="px-24 pt-24 w-full">
        <motion.p
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.5,
            duration: 2,
          }}
          className="sm:text-[18px] text-[14px] text-light dark:text-dark uppercase tracking-wider"
        >
          Profile
        </motion.p>
        <motion.h1
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 1,
            duration: 2,
          }}
          className="text-light dark:text-dark font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >
          {pathProfileName}
        </motion.h1>
        <motion.span
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 1.2,
            duration: 2.5,
          }}
          className="text-light dark:text-dark font-light md:text-[18px] sm:text-[18px] xs:text-[18px] text-[14px]"
        >
          - {profileData.position} -
        </motion.span>
        <motion.hr
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 1.5,
            duration: 2,
          }}
          className="my-4 w-1/2"
        />
        <motion.p
          initial={{ translateX: -100, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{
            type: "spring",
            delay: 2,
            duration: 2,
          }}
          className="mt-4 text-light dark:text-dark text-[17px] max-w-3xl leading-[30px] h-[150px] relative z-50"
        >
          <QuoteIcon
            aria-hidden="true"
            className="size-3 mr-1 fill-white stroke-none -translate-y-1 inline"
          />
          {profileData.description}
          <QuoteIcon
            aria-hidden="true"
            className="size-3 ml-1 fill-white stroke-none translate-y-1 inline"
          />
        </motion.p>
      </div>
      <div className="px-24 mt-20 flex flex-wrap w-full justify-start gap-10">
        {profileData.skills.map((skill, index) => (
          <Card
            name={profileKey}
            key={skill.title}
            index={index}
            isProfile
            {...skill}
          />
        ))}
      </div>
    </div>
  );
};

export default Intro;

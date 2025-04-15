/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFirstMountSubPage } from "@/app/(subPage)/provider";
import NavigateTransition from "@/components/PageTransition/NavigateTransition";
import { useRouter, useSearchParams } from "next/navigation";
import { projectDetail, projects } from "@/constants";
import { Tilt } from "react-tilt";
import { githubIcon, rightArrowIcon, leftArrowIcon } from "@/assets";
import { textVariant } from "@/lib/motion";
import { cn, convertPathName } from "@/lib/utils";
import { Luckiest_Guy } from "next/font/google";
import gsap from "gsap";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

type ProjectCardProps = {
  index: number;
  tags: {
    name: string;
    color: string;
  }[];
  description: string;
  name: string;
  image: string;
  link: string;
  projectName: string | null;
};

// eslint-disable-next-line react/display-name
const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ index, name, description, tags, image, link, projectName }, ref) => {
    const router = useRouter();

    const goToProjectsDetail = (projectName: string) => {
      router.push(`?name=${projectName.replace(" ", "-")}`);
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 0, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 0, scale: 0.8 }}
        transition={{ delay: 0.2 * index, duration: 1, ease: "easeInOut" }}
        onClick={() => goToProjectsDetail(name)}
        layout
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer border border-black"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
            {projectName == null && (
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the parent click handler from firing
                    window.open(link, "_blank");
                  }}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={githubIcon.src}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-5">
            <h3 className="text-black font-bold text-[24px]">{name}</h3>
            {projectName == null && (
              <p className="mt-2 text-black text-[14px]">{description}</p>
            )}
          </div>
          {projectName == null && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          )}
        </Tilt>
      </motion.div>
    );
  }
);

const ProjectPage = () => {
  const router = useRouter();
  const { isFirstMount: isFirstMountSubPage } = useFirstMountSubPage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const projectNameFromParams = params.get("name");
  const pathProjectName = convertPathName(projectNameFromParams ?? "");
  console.log("pathProjectName", pathProjectName);
  const projectData =
    projectDetail[pathProjectName as keyof typeof projectDetail];
  const [pathName1, pathName2] = pathProjectName.split(" ");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const navigateProjectHome = () => {
    router.back();
  };

  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.offsetHeight;

      containerRef.current.style.position = projectNameFromParams
        ? "absolute"
        : "relative";
      containerRef.current.style.height = `${containerHeight}px`;

      gsap.to(containerRef.current, {
        opacity: projectNameFromParams ? 0 : 1,
        y: projectNameFromParams ? -50 : 0,
        duration: 0.8,
        ease: "easeInOut",
      });
    }
  }, [projectNameFromParams]);

  useLayoutEffect(() => {
    window.history.replaceState(null, "", "/project");
  }, []);

  return (
    <motion.main>
      {isFirstMountSubPage ? (
        <NavigateTransition />
      ) : (
        <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
          <div ref={containerRef} className="relative pl-20">
            <motion.div variants={textVariant()} className="mt-20">
              <motion.h2
                variants={textVariant(1)}
                className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
              >
                Projects.
              </motion.h2>
              <motion.p
                variants={textVariant(0.5)}
                className="sm:text-[18px] text-[14px] text-black uppercase tracking-wider"
              >
                Team work
              </motion.p>
            </motion.div>
            <div className="flex mt-14 *:shrink-0 gap-12 w-full">
              {projects.map(
                (project, index) =>
                  index >= currentSlide && (
                    <AnimatePresence
                      mode="popLayout"
                      key={`${project.name}-${index}`}
                    >
                      <ProjectCard
                        index={index}
                        projectName={projectNameFromParams}
                        {...project}
                      />
                    </AnimatePresence>
                  )
              )}
            </div>
            <div className="flex gap-4 justify-center mt-6">
              <button
                disabled={currentSlide === 0}
                type="button"
                onClick={handlePreviousSlide}
                className={`bg-black rounded-full group size-20 p-1.5 inline-flex items-center justify-center hover:scale-110 transition-all ${
                  currentSlide === 0 && "opacity-50"
                }`}
              >
                <img src={leftArrowIcon.src} alt="left arrow" />
              </button>
              <button
                disabled={currentSlide === projects.length - 1}
                type="button"
                onClick={handleNextSlide}
                className={`bg-black rounded-full group size-20 p-1.5 inline-flex items-center justify-center hover:scale-110 transition-all ${
                  currentSlide === projects.length - 1 && "opacity-50"
                }`}
              >
                <img src={rightArrowIcon.src} alt="right arrow" />
              </button>
            </div>
          </div>

          {projectNameFromParams != null && (
            <AnimatePresence key={projectNameFromParams}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="fixed top-4 left-4 rounded-full hover:scale-110 transition-all z-50 size-20 p-3 mix-blend-difference border border-white cursor-pointer"
                onClick={navigateProjectHome}
              >
                <img src={leftArrowIcon.src} alt="left arrow" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="w-full h-full z-50"
              >
                {projectData.background && (
                  <div className="relative w-full">
                    <img
                      src={projectData.background}
                      className="w-screen h-[500px]"
                      alt="project img"
                    />
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        delay: 0.5,
                        duration: 2,
                      }}
                      className="absolute bottom-2 left-20 text-5xl lg:text-7xl flex items-center justify-center mix-blend-difference"
                    >
                      <span
                        className={cn(
                          "animate-bop block ",
                          luckiestGuy.className
                        )}
                      >
                        {pathName1}
                      </span>
                      <span
                        className={cn(
                          "animate-bopB block ",
                          luckiestGuy.className
                        )}
                      >
                        {pathName2}
                      </span>
                    </motion.h1>
                  </div>
                )}
                <div className="px-24 pt-10">
                  <div className="text-lg py-10 flex justify-center gap-2">
                    <p className="text-black">{projectData.description}</p>
                  </div>

                  <hr className="w-1/2 mx-auto my-20" />

                  <motion.div variants={textVariant()}>
                    <motion.p
                      variants={textVariant(0.5)}
                      className="sm:text-[18px] text-[14px] text-black tracking-wider text-center"
                    >
                      Technicals of project
                    </motion.p>
                    <motion.h2
                      variants={textVariant(1)}
                      className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
                    >
                      Technicals
                    </motion.h2>
                    <motion.div
                      variants={textVariant(1)}
                      className="flex justify-center gap-6"
                    >
                      {projectData.technical.map((tech, index) => (
                        <div key={`${tech.icon}_${index}`}>
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-20 h-20"
                          />
                          <span className="block text-black text-center pt-4">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>

                  <hr className="w-1/2 mx-auto my-20" />

                  <motion.div variants={textVariant()}>
                    <motion.p
                      variants={textVariant(0.5)}
                      className="sm:text-[18px] text-[14px] text-black tracking-wider text-center"
                    >
                      Some illustrative images
                    </motion.p>
                    <motion.h2
                      variants={textVariant(1)}
                      className=" text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
                    >
                      Picture
                    </motion.h2>
                  </motion.div>
                  <div className="grid grid-cols-1 my-20">
                    {projectData.images.map((image, index) => (
                      <figure
                        key={`${index}_${image.alt}`}
                        className={`relative transition-transform duration-300 col-span-2 project-list-image cursor-pointer ${
                          index % 2 ? "col-start-1 left" : "col-start-2 right"
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="rounded-md shadow-custom transition-transform duration-300 w-[800px] h-[500px]"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      )}
    </motion.main>
  );
};

export default ProjectPage;

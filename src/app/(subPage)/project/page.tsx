"use client";

import React from "react";
import { motion } from "framer-motion";
import { useFirstMountSubPage } from "@/app/(subPage)/provider";
import NavigateTransition from "@/components/PageTransition/NavigateTransition";

const ProjectPage = () => {
  const { isFirstMount } = useFirstMountSubPage();

  return (
    <motion.main exit={{ opacity: 0 }}>
      {isFirstMount ? <NavigateTransition /> : <div className="relative"></div>}
    </motion.main>
  );
};

export default ProjectPage;

"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import NavigateTransition from "@/components/PageTransition/NavigateTransition";
import { useFirstMountSubPage } from "@/app/(subPage)/provider";

const OverviewPage: FC = () => {
  const { isFirstMount: isFirstMountSubPage } = useFirstMountSubPage();
  console.log("isFirstMountSubPage", isFirstMountSubPage);
  return (
    <motion.main exit={{ opacity: 0 }}>
      {isFirstMountSubPage ? (
        <NavigateTransition />
      ) : (
        <div className="bg-[#cdc6be] h-screen"></div>
      )}
    </motion.main>
  );
};

export default OverviewPage;

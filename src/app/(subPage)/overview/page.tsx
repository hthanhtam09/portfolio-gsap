"use client";

import { FC, useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import NavigateTransition from "@/components/PageTransition/NavigateTransition";
import { useFirstMountSubPage } from "@/app/(subPage)/provider";
import gsap from "gsap";
import { profiles } from "@/constants";
import Card from "@/components/Card";
import { useSearchParams } from "next/navigation";
import Intro from "@/components/Intro";
import Experience from "@/components/Experience";
import TechSkill from "@/components/TechSkill";

const OverviewPage: FC = () => {
  const { isFirstMount: isFirstMountSubPage } = useFirstMountSubPage();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const profileNameFromParams = params.get("name");
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      if (profileNameFromParams) {
        gsap.set(cardRef.current, { flexDirection: "column" });
        gsap.to(cardRef.current, {
          scale: 0.5,
          gap: 30,
          duration: 1.5,
          ease: "power2.out",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 998,
        });
      }
    }
  }, [profileNameFromParams]);

  useLayoutEffect(() => {
    window.history.replaceState(null, "", "/overview");
    gsap.set(cardRef.current, {
      scale: 1,
      position: "fixed",
      top: "50%",
      right: "50%",
    });
  }, []);

  return (
    <motion.main>
      {isFirstMountSubPage ? (
        <NavigateTransition />
      ) : (
        <div className="bg-[#cdc6be] w-full h-screen overflow-y-auto overflow-x-hidden relative">
          <div
            ref={cardRef}
            className="flex flex-wrap justify-center gap-10 items-center h-screen"
          >
            {profiles.map((profile, index) => (
              <Card
                key={`${profile.title}_${index}`}
                index={index}
                {...profile}
              />
            ))}
          </div>
          {profileNameFromParams != null && (
            <>
              <section className="w-screen">
                <Intro profileKey={profileNameFromParams} />
              </section>
              <section className="w-screen">
                <Experience profileKey={profileNameFromParams} />
              </section>
              <section className="w-screen">
                <TechSkill profileKey={profileNameFromParams} />
              </section>
            </>
          )}
        </div>
      )}
    </motion.main>
  );
};

export default OverviewPage;

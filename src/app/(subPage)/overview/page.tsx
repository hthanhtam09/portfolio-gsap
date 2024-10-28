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

const OverviewPage: FC = () => {
  const { isFirstMount: isFirstMountSubPage } = useFirstMountSubPage();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const profileNameFromParams = params.get("name");
  const containerRef = useRef<HTMLDivElement | null>(null);
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
          position: "absolute",
          top: 0,
          right: -10,
          zIndex: 99998,
        });
      }
    }
  }, [profileNameFromParams]);

  useLayoutEffect(() => {
    window.history.replaceState(null, "", "/overview");
    gsap.set(cardRef.current, {
      scale: 1,
      position: "absolute",
      top: "50%",
      right: "50%",
    });
  }, []);

  return (
    <motion.main>
      {isFirstMountSubPage ? (
        <NavigateTransition />
      ) : (
        <div
          className="bg-[#cdc6be] w-full h-screen overflow-y-auto flex items-center justify-center relative"
          ref={containerRef}
        >
          <section className="mt-20">
            <div ref={cardRef} className="flex flex-wrap justify-center gap-10">
              {profiles.map((profile, index) => (
                <Card
                  key={`${profile.title}_${index}`}
                  index={index}
                  {...profile}
                />
              ))}
            </div>
            {profileNameFromParams != null && (
              <Intro profileKey={profileNameFromParams} />
            )}
          </section>
        </div>
      )}
    </motion.main>
  );
};

export default OverviewPage;

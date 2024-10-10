import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Anton } from "next/font/google";
import { cn } from "@/lib/utils";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const Typewriter: React.FC = () => {
  const [text] = useTypewriter({
    words: ["web development!", "mobile development!", "game development!"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <h1
      className={cn(
        "text-black text-8xl p-20 typewriterTitle z-[9999]",
        anton.className
      )}
    >
      Together, we can turn your vision into reality—be it <br />
      <span className="text-black">{text}</span>
      <Cursor />
    </h1>
  );
};

export default Typewriter;

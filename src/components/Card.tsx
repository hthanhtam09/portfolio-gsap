import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type CardProps = {
  index: number;
  title: string;
  icon: {
    src: string;
  };
  name: string;
  isProfile?: boolean;
};

const Card = ({ index, title, icon, name, isProfile }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navigateProfile = () => {
    router.push(`?name=${name}`);
  };

  useEffect(() => {
    if (isProfile) return;
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { x: 0, y: -30 },
        {
          x: 20,
          y: 30,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 3 + Math.random() * 2,
          delay: index * 0.5,
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tilt className="z-50 cursor-pointer">
      <motion.div
        ref={cardRef}
        initial={{ translateX: -100, opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{
          type: "spring",
          delay: index * 0.5,
          duration: 5,
        }}
        className={cn(
          "w-[250px] h-[250px] rounded-full bg-white/5 backdrop-blur-[2px]",
          isProfile && "w-full rounded-[20px]"
        )}
        onClick={navigateProfile}
      >
        <div
          className={cn(
            "border dark:border-dark border-light rounded-full p-12 flex justify-center gap-3 items-center flex-col",
            isProfile && "w-full min-h-[280px] rounded-[20px]"
          )}
        >
          <img src={icon.src} alt="member" className="w-16 h-16 rounded-full" />
          {!isProfile && (
            <span className="text-black text-[20px] font-bold text-center">
              {name.replace(/-/g, " ")}
            </span>
          )}
          <h3 className="text-black text-[16px] font-light text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default Card;

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useSplashAnimations = (
  imageMainRef: React.RefObject<HTMLDivElement>,
  sliderMainRef: React.RefObject<HTMLDivElement>,
  contentRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0 });

    const animateCols = (
      colClass: string,
      stagger: number,
      position: number
    ) => {
      tl.to(
        `.${colClass} .item`,
        {
          top: 0,
          stagger,
          duration: 3,
          ease: "power4.inOut",
        },
        `-=${position}`
      );
    };

    tl.to(".col", {
      top: 0,
      duration: 3,
      ease: "power4.inOut",
    });

    animateCols("c-1", 0.25, 2);
    animateCols("c-2", -0.25, 4);
    animateCols("c-3", 0.25, 4);
    animateCols("c-4", -0.25, 4);
    animateCols("c-5", 0.25, 4);

    tl.to(
      ".container-wrapper",
      {
        scale: 5.4,
        duration: 4,
        ease: "power4.inOut",
        onComplete: () => {
          if (imageMainRef.current) {
            gsap.to(imageMainRef.current, { opacity: 0, duration: 1 });
          }
          if (sliderMainRef.current) {
            gsap.to(sliderMainRef.current, { opacity: 1, duration: 1 });
          }
          if (contentRef.current) {
            gsap.to(contentRef.current, { opacity: 1, duration: 1 });
          }
        },
      },
      "-=2"
    );
  }, [imageMainRef, sliderMainRef, contentRef]);
};

export const useMenuAnimations = (
  overlayRef: React.RefObject<HTMLDivElement>,
  menuItemsRef: React.RefObject<HTMLDivElement>,
  subNavRef: React.RefObject<HTMLDivElement>
) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeline = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { opacity: 0 });
    }
    if (menuItemsRef.current) {
      gsap.set(menuItemsRef.current, { y: 225 });
    }
    if (subNavRef.current) {
      gsap.set(subNavRef.current, { bottom: "50%", opacity: 0 });
    }

    timeline.current = gsap.timeline({ paused: true });

    timeline.current.to(overlayRef.current, {
      duration: 1.5,
      ease: "power4.inOut",
      zIndex: 1,
      opacity: 1,
    });

    timeline.current.to(
      menuItemsRef.current,
      {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.inOut",
      },
      "-=1"
    );

    timeline.current.to(
      subNavRef.current,
      {
        bottom: "10%",
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        zIndex: 1,
      },
      "<"
    );

    return () => {
      timeline.current?.kill();
    };
  }, [overlayRef, menuItemsRef, subNavRef]);

  const handleToggle = () => {
    if (isOpen) {
      timeline.current?.reverse();
    } else {
      timeline.current?.play();
    }

    setIsOpen((prev) => !prev);
  };

  return { isOpen, handleToggle };
};

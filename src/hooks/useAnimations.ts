import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

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

  const timeline = gsap.timeline({ paused: true });

  useEffect(() => {
    if (overlayRef.current && menuItemsRef.current && subNavRef.current) {
      gsap.set(menuItemsRef.current, {
        y: 225,
      });

      timeline.to(overlayRef.current, {
        duration: 1.5,
        ease: "power4.inOut",
        opacity: 1,
      });

      timeline.to(
        menuItemsRef.current,
        {
          duration: 1.5,
          y: 0,
          stagger: 0.2,
          ease: "power4.inOut",
        },
        "-=1"
      );

      timeline.to(
        subNavRef.current,
        {
          bottom: "10%",
          opacity: 1,
          duration: 0.5,
          delay: 0.5,
        },
        "<"
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlayRef, menuItemsRef, subNavRef]);

  const handleToggle = () => {
    if (!isOpen) {
      timeline.play();
    } else {
      timeline.restart();
    }

    setIsOpen((prev) => !prev);
  };

  return { isOpen, handleToggle };
};

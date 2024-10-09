"use client";

import Slider from "../components/Slider";
import NavBar from "@/components/Navbar";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image, { StaticImageData } from "next/image";
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "@/assets";

const images: { [key: number]: StaticImageData } = {
  1: Img1,
  2: Img2,
  3: Img3,
  4: Img4,
  5: Img5,
  6: Img6,
};

const useGsapAnimations = (
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

const Col = ({
  colClass,
  imageKeys,
}: {
  colClass: string;
  imageKeys: number[];
}) => (
  <div className={`col ${colClass}`}>
    {imageKeys.map((key) => (
      <div className="item" key={key}>
        <Image fill src={images[key]} alt="" />
      </div>
    ))}
  </div>
);

export default function Home() {
  const imageMainRef = useRef<HTMLDivElement>(null);
  const sliderMainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGsapAnimations(imageMainRef, sliderMainRef, contentRef);

  return (
    <>
      <div className="container-wrapper">
        <Col colClass="c-1" imageKeys={[1, 2, 3, 4, 5]} />
        <Col colClass="c-2" imageKeys={[6, 5, 2, 1, 3]} />
        <Col colClass="c-3" imageKeys={[5, 6, 1, 2, 3]} />
        <Col colClass="c-4" imageKeys={[3, 4, 5, 2, 1]} />
        <Col colClass="c-5" imageKeys={[3, 2, 6, 5, 1]} />
      </div>

      <div className="content" ref={contentRef}>
        <NavBar />
        <div
          ref={sliderMainRef}
          className="absolute inset-0 opacity-0 transition-opacity"
        >
          <Slider />
        </div>
      </div>
    </>
  );
}

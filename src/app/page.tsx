"use client";

import NavBar from "@/components/Navbar";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { slider1, slider2, slider3, slider4, slider5 } from "@/assets";
import { useMenuAnimations, useSplashAnimations } from "@/hooks/useAnimations";
import Hero from "@/components/Hero";
import Overlay from "@/components/Overlay";

const images: { [key: number]: StaticImageData } = {
  1: slider1,
  2: slider2,
  3: slider3,
  4: slider4,
  5: slider5,
  6: slider1,
  7: slider2,
  8: slider3,
  9: slider4,
  10: slider5,
  11: slider2,
  12: slider3,
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
        <Image
          src={images[key]}
          alt={`Project ${key}`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    ))}
  </div>
);

export default function Home() {
  const imageMainRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  useSplashAnimations(imageMainRef, mainRef, contentRef);
  const { isOpen, handleToggle } = useMenuAnimations(overlayRef, menuItemsRef);

  return (
    <>
      <div className="container-wrapper">
        <Col colClass="c-1" imageKeys={[1, 2, 3, 4, 5]} />
        <Col colClass="c-2" imageKeys={[11, 4, 9, 8, 7]} />
        <Col colClass="c-3" imageKeys={[10, 6, 9, 2, 3]} />
        <Col colClass="c-4" imageKeys={[8, 4, 5, 2, 1]} />
        <Col colClass="c-5" imageKeys={[11, 2, 10, 5, 1]} />
      </div>
      <div className="content" ref={contentRef}>
        <div
          ref={mainRef}
          className="absolute inset-0 opacity-0 transition-opacity"
        >
          <NavBar title="home" isOpen={isOpen} handleToggle={handleToggle} />
          <Hero />
          <Overlay
            isOpen={isOpen}
            ref={overlayRef}
            menuItemsRef={menuItemsRef}
          />
        </div>
      </div>
    </>
  );
}

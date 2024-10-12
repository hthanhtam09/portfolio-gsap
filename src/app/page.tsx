"use client";

import NavBar from "@/components/Navbar";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "@/assets";
import { useMenuAnimations, useSplashAnimations } from "@/hooks/useAnimations";
import Hero from "@/components/Hero";
import Overlay from "@/components/Overlay";
import SubNav from "@/components/SubNav";

const images: { [key: number]: StaticImageData } = {
  1: Img1,
  2: Img2,
  3: Img3,
  4: Img4,
  5: Img5,
  6: Img6,
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
  const mainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const subNavRef = useRef<HTMLDivElement>(null);

  useSplashAnimations(imageMainRef, mainRef, contentRef);
  const { isOpen, handleToggle } = useMenuAnimations(
    overlayRef,
    menuItemsRef,
    subNavRef
  );

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
        <div
          ref={mainRef}
          className="absolute inset-0 opacity-0 transition-opacity"
        >
          <NavBar title="home" isOpen={isOpen} handleToggle={handleToggle} />
          <Hero />
          <Overlay ref={overlayRef} menuItemsRef={menuItemsRef} />
          <SubNav ref={subNavRef} />
        </div>
      </div>
    </>
  );
}

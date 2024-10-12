"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "@/assets";
import Image, { StaticImageData } from "next/image";
import { Anton } from "next/font/google";
import { cn } from "@/lib/utils";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

const images: { [key: number]: StaticImageData } = {
  1: Img1,
  2: Img2,
  3: Img3,
  4: Img4,
  5: Img5,
  6: Img6,
};

gsap.registerPlugin(CustomEase);

CustomEase.create(
  "hop",
  "M0, 0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
);

const Slider: React.FC = () => {
  const sliderImagesRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const titlesRef = useRef<HTMLDivElement>(null);
  const totalSliders = Object.keys(images).length;
  const [currentImg, setCurrentImg] = useState<number>(1);

  useEffect(() => {
    animateSlide("right", currentImg); // Start with the first image on mount
  }, []);

  const updateCounterAndTitlePosition = (newIndex: number) => {
    const counterY = -20 * (newIndex - 1);
    const titleY = -60 * (newIndex - 1);

    if (counterRef.current && titlesRef.current) {
      gsap.to(counterRef.current, {
        y: counterY,
        duration: 1,
        ease: "hop",
      });
      gsap.to(titlesRef.current, {
        y: titleY,
        duration: 1,
        ease: "hop",
      });
    }
  };

  const animateSlide = (direction: "left" | "right", newIndex: number) => {
    if (!sliderImagesRef.current) return;

    const slideImg = document.createElement("div");
    slideImg.classList.add("img");

    const slideImgEle = document.createElement("img");
    slideImgEle.src = images[newIndex].src;

    gsap.set(slideImgEle, {
      x: direction === "left" ? "-100%" : "100%",
      scale: 0.9,
      autoAlpha: 0,
    });

    slideImg.appendChild(slideImgEle);
    sliderImagesRef.current.appendChild(slideImg);

    gsap.to(slideImgEle, {
      x: 0,
      scale: 1,
      autoAlpha: 1,
      duration: 1.5,
      ease: "power4.out",
    });

    gsap.fromTo(
      slideImg,
      {
        clipPath:
          direction === "left"
            ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
            : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        ease: "power4.out",
      }
    );

    updateCounterAndTitlePosition(newIndex);
    cleanUpSliders();
  };

  const cleanUpSliders = () => {
    const imgElements = sliderImagesRef.current?.querySelectorAll(".img");

    imgElements?.forEach((img, index) => {
      if (index < imgElements.length - 1) {
        gsap.to(img, { autoAlpha: 0, duration: 0.5 });
      }
    });

    if (imgElements && imgElements.length > 2) {
      gsap.to(imgElements[0], {
        scale: 0.8,
        autoAlpha: 0,
        duration: 0.5,
        onComplete: () => imgElements[0].remove(),
      });
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    const sliderWidth = sliderImagesRef.current?.clientWidth ?? 0;
    const clickPosition = event.clientX;

    if (clickPosition < sliderWidth / 2 && currentImg > 1) {
      // Go to the previous slide
      const newIndex = currentImg - 1;
      setCurrentImg(newIndex);
      animateSlide("left", newIndex);
    } else if (clickPosition > sliderWidth / 2 && currentImg < totalSliders) {
      // Go to the next slide
      const newIndex = currentImg + 1;
      setCurrentImg(newIndex);
      animateSlide("right", newIndex);
    }
  };

  const handlePreviewClick = (index: number) => {
    const newIndex = index + 1; // Adjust for zero-based index
    const direction = newIndex > currentImg ? "right" : "left";
    setCurrentImg(newIndex);
    animateSlide(direction, newIndex);
  };

  return (
    <div className={cn("slider", anton.className)} onClick={handleClick}>
      <div className="img object-contain"></div>
      <div className="slider-images" ref={sliderImagesRef}></div>

      <div className="slider-title">
        <div className="slider-title-wrapper text-white" ref={titlesRef}>
          <p>The ultimate choice for digital innovation.</p>
          <p>A smart solution for mobile excellence.</p>
          <p>Crafting perfection in web design.</p>
          <p>Your top partner in app development.</p>
          <p>Delivering the best in game creation.</p>
          <p>Empowering your digital success with precision.</p>
        </div>
      </div>

      <div className="slider-counter text-white text-sm">
        <div className="counter" ref={counterRef}>
          {Object.keys(images).map((key) => (
            <p key={key}>{currentImg}</p>
          ))}
        </div>
        <div>
          <p>&mdash;</p>
        </div>
        <div>
          <p>{totalSliders}</p>
        </div>
      </div>

      <div className="slider-preview">
        {Object.entries(images).map(([key, image], index) => (
          <div
            className={`preview ${currentImg === index + 1 ? "active" : ""}`}
            key={key}
            onClick={() => handlePreviewClick(index)}
          >
            <Image src={image.src} alt={`Img${key}`} fill />
            <style jsx>{`
              .preview:hover {
                transform: scale(1.1);
                transition: transform 0.3s ease;
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

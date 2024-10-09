"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import { Img1, Img2, Img3, Img4, Img5, Img6 } from "@/assets";
import Image, { StaticImageData } from "next/image";

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
  const prevSlidersRef = useRef<NodeListOf<HTMLDivElement>>();
  const totalSliders = Object.keys(images).length;
  const [currentImg, setCurrentImg] = useState<number>(1);

  useEffect(() => {
    prevSlidersRef.current = document.querySelectorAll(
      ".slider-preview .preview"
    );

    animateSlide("left");
  }, []);

  const updateCounterAndTitlePosition = () => {
    const counterY = -20 * (currentImg - 1);
    const titleY = -60 * (currentImg - 1);

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

  const animateSlide = (direction: "left" | "right") => {
    if (!sliderImagesRef.current) return;

    const slideImg = document.createElement("div");
    slideImg.classList.add("img");

    const slideImgEle = document.createElement("img");
    slideImgEle.src = images[currentImg].src;

    gsap.set(slideImgEle, { x: direction === "left" ? "-100%" : "100%" });
    slideImg.appendChild(slideImgEle);
    sliderImagesRef.current.appendChild(slideImg);

    const currentSlide = sliderImagesRef.current
      .lastElementChild as HTMLDivElement;

    gsap.to(currentSlide.querySelector("img"), {
      x: 0,
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

    updateCounterAndTitlePosition();
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
      imgElements[0]?.remove();
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    const sliderWidth = sliderImagesRef.current?.clientWidth ?? 0;
    const clickPosition = event.clientX;

    if (clickPosition < sliderWidth / 2 && currentImg > 1) {
      setCurrentImg((prev) => Math.max(prev - 1, 1));
      animateSlide("left");
    } else if (clickPosition > sliderWidth / 2 && currentImg < totalSliders) {
      setCurrentImg((prev) => Math.min(prev + 1, totalSliders));
      animateSlide("right");
    }
  };

  const handlePreviewClick = (index: number) => {
    console.log(index);
    const direction = index > currentImg ? "right" : "left";
    setCurrentImg(index);
    animateSlide(direction);
  };

  return (
    <div className="slider" onClick={handleClick}>
      <div className="img">
        {/* <Image src={images[1].src} alt="Img1" fill /> */}
      </div>
      <div className="slider-images" ref={sliderImagesRef}></div>

      <div className="slider-title">
        <div className="slider-title-wrapper" ref={titlesRef}>
          <p>The best choice</p>
          <p>A good choice</p>
          <p>Perfect choice</p>
          <p>Best choice</p>
          <p>Good choice</p>
          <p>Perfect choice</p>
        </div>
      </div>

      <div className="slider-counter">
        <div className="counter" ref={counterRef}>
          {Object.keys(images).map((key) => {
            return <p key={key}>{currentImg}</p>;
          })}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

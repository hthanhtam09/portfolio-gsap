/* eslint-disable @next/next/no-img-element */
"use client";

import React, { Suspense, useRef, useState } from "react";
import { motion } from "framer-motion";
import { githubIcon, linkedinIcon } from "@/assets";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { textVariant } from "@/lib/motion";
import { useFirstMountSubPage } from "../provider";
import NavigateTransition from "@/components/PageTransition/NavigateTransition";
import { Plane } from "@/components/Models/Plane";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/Loader";

const IconImage = [
  {
    src: githubIcon.src,
    alt: "github",
    href: "https://github.com/",
  },
  {
    src: linkedinIcon.src,
    alt: "linkedin",
    href: "https://linkedin.com/",
  },
];

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value, // Dynamically set the field based on the input's id
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) {
      console.error("Form reference is null");
      return;
    }

    emailjs
      .send(
        process.env.serviceIdEmail ?? "",
        process.env.templateIdEmail ?? "",
        {
          from_name: formData.email,
          to_name: formData.username,
          message: formData.message,
        },
        {
          publicKey: process.env.publicKeyEmail ?? "",
        }
      )
      .then(
        (result) => {
          console.log("result", result);
          setFormData({
            email: "",
            username: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <motion.form
      variants={textVariant()}
      onSubmit={handleSubmit}
      className="w-full max-w-md border border-black rounded-3xl p-8"
      ref={formRef}
    >
      <div className="mb-5">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-black"
        >
          Username
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 border border-e-0 border-black rounded-s-md">
            <svg
              className="w-4 h-4 text-white dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </span>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="rounded-none rounded-e-lg border border-black in-w-0 w-full text-sm p-2.5 text-white"
            placeholder="Nguyen Van A"
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-black"
        >
          Your Email
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 text-sm text-black border border-e-0 border-black rounded-s-md">
            <svg
              className="w-4 h-4 text-white dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="M10.036 8.278l9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </span>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-none rounded-e-lg border border-black text-white block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="NguyenVanA@gmail.com"
          />
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-black"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-white rounded-lg border border-black"
          placeholder="Leave a message..."
        ></textarea>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-4">
          {IconImage.map((icon) => (
            <Link key={icon.alt} href={icon.href}>
              <img src={icon.src} alt={icon.alt} className="w-8 h-8" />
            </Link>
          ))}
        </div>
        <button
          disabled={
            formData.email === "" ||
            formData.username === "" ||
            formData.message === ""
          }
          type="submit"
          className="text-black border border-black hover:opacity-90 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:scale-110 hover:text-white hover:border-white hover:bg-black"
        >
          Submit
        </button>
      </div>
    </motion.form>
  );
};

const ContactPage = () => {
  const { isFirstMount: isFirstMountSubPage } = useFirstMountSubPage();

  return (
    <motion.main className="flex flex-col h-screen">
      {isFirstMountSubPage ? (
        <NavigateTransition />
      ) : (
        <>
          <div className="text-center mt-32">
            <motion.p
              variants={textVariant(0.5)}
              className="sm:text-[18px] text-[14px] text-black uppercase tracking-wider"
            >
              - Say hi 👋 -
            </motion.p>
            <motion.h2
              variants={textVariant(1)}
              className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
            >
              Contact our team
            </motion.h2>
          </div>
          <div className="flex items-center justify-center mt-10 px-40">
            <div className="relative z-50 flex-1 pl-20">
              <ContactForm />
            </div>
            <div className="relative flex-1 flex">
              <Canvas
                className="w-full !h-[300px] bg-transparent "
                camera={{ near: 0.1, far: 1000 }}
              >
                <Suspense fallback={<Loader />}>
                  <directionalLight position={[1, 1, 1]} intensity={2} />
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 5, 10]} intensity={2} />
                  <spotLight
                    position={[0, 50, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                  />
                  <hemisphereLight
                    color="#b1e1ff"
                    groundColor="#000000"
                    intensity={1}
                  />
                  <Plane
                    rotation={[0, 12.1, 0]}
                    scale={5}
                    position={[0, -1, 0]}
                  />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </>
      )}
    </motion.main>
  );
};

export default ContactPage;

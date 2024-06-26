import { motion } from "framer-motion";
import React, { useRef } from "react";
import { bounceInRight, fadeIn } from "react-animations";
import TypeAnimation from "react-type-animation";
import styled, { keyframes } from "styled-components";
import GitHubIcon from "./github.png";
import LinkedInIcon from "./linkedin.png";
import resumeIcon from "./resume.png";

export const Home = () => {
  const coverMeRef = useRef(null);

  const handleHover = () => {
    coverMeRef.current.textContent = "My Profile";
    coverMeRef.current.className =
      "leading-tight py-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500";
  };

  const handleHoverEnd = () => {
    coverMeRef.current.textContent = "Take a look at my experiences";
    coverMeRef.current.className =
      "text-lg leading-tight py-5 tracking-tight font-light text-center text-gray-400";
  };

  const animation = keyframes`${fadeIn}`;

  const logoAnimation = keyframes`to {opacity: 1}${bounceInRight}`;

  const TitleDiv = styled.div`
    animation: 2.5s ${animation};
  `;

  const LinkedInDiv = styled.div`
    animation: 2s ${logoAnimation};
    animation-delay: 4s;
    opacity: 0;
    animation-fill-mode: forwards;
  `;

  const GitHubDiv = styled.div`
    opacity: 0;
    animation: 2s ${logoAnimation};
    animation-delay: 5.25s;
    animation-fill-mode: forwards;
  `;

  const ResumeDiv = styled.div`
    opacity: 0;
    animation: 2s ${logoAnimation};
    animation-delay: 6.5s;
    animation-fill-mode: forwards;
  `;

  const DelayedDiv = styled.div`
    opacity: 0;
    animation: 2s ${animation};
    animation-delay: 7.75s;
    animation-fill-mode: forwards;
  `;

  return (
    <div className="relative flex justify-center h-screen bg-black">
      <div className="md:w-[65%] lg:w-[40%] mx-auto absolute top-60">
        <p className="text-sm text-indigo-200 mb-4">
          Hey, welcome to my website. I'm
        </p>
        <TitleDiv>
          <p className="pb-6 text-6xl">Luka David</p>
        </TitleDiv>
        <div className="h-20">
          <div style={{ width: "360px" }}>
            <TypeAnimation
              cursor={false}
              sequence={[1000, "Software Engineer Graduate"]}
            />
          </div>
          <div style={{ width: "360px" }}>
            <TypeAnimation
              cursor={false}
              sequence={[2500, "from the University of Ottawa"]}
            />
          </div>
        </div>
        <div className="flex">
          <LinkedInDiv>
            <a
              href="https://www.linkedin.com/in/luka-david/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedInIcon" />
            </a>
          </LinkedInDiv>
          <GitHubDiv>
            <a
              href="https://github.com/LukaDavid04"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHubIcon} alt="GitHubIcon" />
            </a>
          </GitHubDiv>
          <ResumeDiv>
            <a
              href="https://drive.google.com/file/d/1RCKMkN670p0nia0EmuqpBqACMsMS4vrt/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img src={resumeIcon} alt={"resume"} />
            </a>
          </ResumeDiv>
        </div>
        <div className="">
          <a
            href="https://www.linkedin.com/in/luka-david"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            style={{ textDecoration: "none", border: "none" }}
          >
            <DelayedDiv>
              <motion.div
                className="w-[150px] h-[150px] rounded-3xl flex items-center justify-center transition-colors duration-700 ease-in-out mt-8 border-2 border-dashed border-rose-500 p-2"
                style={{
                  backgroundColor: "var(--bg-color)",
                  "--bg-color": "black",
                }}
                whileHover={{
                  "--bg-color": "#181A1B",
                  scale: [1, 1.6, 1.2],
                  rotate: [0, 360],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  color: "#fff",
                }}
                onHoverStart={handleHover}
                onHoverEnd={handleHoverEnd}
              >
                <p
                  className="text-lg leading-tight py-5 tracking-tight font-light text-center text-gray-400"
                  ref={coverMeRef}
                >
                  Take a look at my experiences
                </p>
              </motion.div>
            </DelayedDiv>
          </a>
        </div>
      </div>
    </div>
  );
};

/* <LanguageDiv className="mt-4">
          <p className="text-indigo-200 mb-4">Languages</p>
          <div className="rounded-md h-content overflow-hidden md:font-semibold">
            <HsbarMin
              showTextIn
              data={[
                {
                  description: "Javascript",
                  value: 80,
                  color: "rgb(11, 16, 115)",
                },
                { description: "Python", value: 40, color: "rgb(67, 195, 97)" },
                {
                  description: "HTML/CSS",
                  value: 60,
                  color: "rgb(110, 57, 195)",
                },
                { description: "C++", value: 20, color: "rgb(195, 57, 57)" },
              ]}
            />
          </div>
        </LanguageDiv> */

// const languageAnimation = keyframes`to {opacity: 1}${fadeInLeft}`;

// const LanguageDiv = styled.div`
//   animation: 2s ${languageAnimation};
//   animation-delay: 7.75s;
//   animation-fill-mode: forwards;
//   opacity: 0;
// `;

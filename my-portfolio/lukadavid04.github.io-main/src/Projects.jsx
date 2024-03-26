import React from "react";
import { FaLink, FaCode } from "react-icons/fa";

export const Projects = () => {
  const UIPill = ({ title }) => {
    return (
      <div className="rounded-full bg-indigo-800 text-white w-fit px-2 m-1 border-0">
        {title}
      </div>
    );
  };

  const Card = ({ title, subtitle, link, repo, tech }) => (
    <div>
      <div className="justify-between bg-indigo-800 rounded-[2rem] p-3 m-3 md:mx-0 md:h-[210px] h-[320px] shadow-2xl :glass:">
        <div className="ml-5 mr-2 grid grid-cols-6 h-full">
          <div className="flex flex-col md:col-span-5 col-span-full mr-4">
            <h3 className="mt-2 text-white text-3xl font-semibold">{title}</h3>
            <p className="mt-1 text-white text-sm text-light">{subtitle}</p>
          </div>
          <div className="flex flex-col justify-center h-full md:col-span-1 col-span-2">
            <div className="flex md:justify-center">
              <div className="flex">
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit hover:scale-125 mr-2"
                  >
                    <button className="w-fit p-4 rounded-lg shadow-xl hover:scale-125 bg-orange-400">
                      <FaLink />
                    </button>
                  </a>
                )}
                {repo && (
                  <a
                    href={repo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit hover:scale-125"
                  >
                    <button className="w-fit p-4 rounded-lg shadow-xl hover:scale-125 bg-orange-400">
                      <FaCode />
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <p className="text-sm text-light">{tech}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const lang = [
    "TypeScript / JavaScript",
    "Python",
    "Java",
    "C++",
    "C",
    "SQL",
    "Solidity",
    "HTML",
    "CSS",
  ];

  const tech = [
    "React",
    "Redux",
    "Node.js",
    "Django",
    "Tailwind CSS",
    "Git",
    "Gatsby",
    "Figma",
    "Segment",
    "Firebase",
    "Docker",
    "Netlify",
    "Apollo GraphQL",
    "Postman",
  ];

  return (
    <div className="flex-col flex justify-center gradient">
      <div className="md:max-w-[65%] mx-auto">
        <p className="pb-6 text-6xl mx-auto mt-4 text-center text-red-500 font-bold font-mono tracking-[-0.10em]">
          Projects
        </p>
        <div className="flex flex-wrap max-w-3/4 justify-center h-fit">
          <Card
            title="Title"
            subtitle="Description"
            link="link"
            repo="link"
            tech="Info"
          />
          <Card
            title="Title"
            subtitle="Description"
            link="link"
            repo="link"
            tech="Info"
          />
          <Card
            title="Title"
            subtitle="Description"
            link="link"
            repo="link"
            tech="Info"
          />
          <Card
            title="Title"
            subtitle="Description"
            link="link"
            repo="link"
            tech="Info"
          />
        </div>
        <div className="m-3 md:mx-0">
          <p className="pb-6 text-6xl mx-auto mt-4 text-center text-red-500 font-bold font-mono tracking-[-0.10em]">
            Skills
          </p>
          <div>
            <div className="bg-orange-400 rounded-lg p-2 my-3">
              <div className="mx-2 flex flex-wrap">
                <p className="font-semibold">Languages:</p>
                <div className="flex flex-wrap">
                  {lang.map((title) => {
                    return <UIPill title={title} key={title} />;
                  })}
                </div>
              </div>
            </div>
            <div className="bg-orange-400 rounded-lg p-2 my-3">
              <div className="mx-2 flex flex-wrap">
                <p className="font-semibold">Technologies:</p>
                <div className="flex flex-wrap">
                  {tech.map((title) => {
                    return <UIPill title={title} key={title} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

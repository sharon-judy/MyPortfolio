import React, { useState } from 'react';
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: " E-cart 🛒 ",
    description: " A simple demo shopping platform for fashion and grocery, built in React Js, Redux js.",
    technologies: "HTML CSS JS",
    image: employeeMSImage,
    github: "https://github.com/sharon-judy/E-cart",
    demo: "https://fashionstore-sage.vercel.app/",
  },
  {
    id: 2,
    name: "Media Player 🎵",
    description: "A simple media player for vedio storage as per our wish, built in React JS.",
    technologies: "HTML CSS JS",
    image: bookMSImage,
    github: "https://github.com/sharon-judy/MediaPlayer",
    demo: "https://media-player-plum-phi.vercel.app/",
  },
  {
    id: 3,
    name: " Calculator 🧮",
    description: "A simple and responsive simple interest calculator for calculating simple interest, using bootstrap",
    technologies: "HTML JS",
    image: bookMSImage,
    github: "https://github.com/sharon-judy/Simple-InterestCalculator",
    demo: "https://simple-interest-calculator-lac.vercel.app/",
  },
  {
    id: 4,
    name: " PlayWrigth-Clone 🎭",
    description: " A clone of testing website playwright using bootstrap.",
    technologies: "HTML CSS ",
    image: employeeMSImage,
    github: "https://github.com/sharon-judy",
    demo: "https://cool-smakager-b267b8.netlify.app/",
  },
  {
    id: 5,
    name: "Digital clock 🕰️",
    description: "A digtal clock for time tracking using the bootstrap,js.",
    technologies: "HTML ",
    image: employeeMSImage,
    github: "https://github.com/sharon-judy/digital-clock",
    demo: "https://example.com/demo5",
  },
  {
    id: 6,
    name: "xxxxxxxx",
    description: "babababhabababababababababbbabababba",
    technologies: "Node.js Express MongoDB",
    image: bookMSImage,
    github: "https://github.com/",
    demo: "https://example.com",
  },
];

function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreProjects = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const showLessProjects = () => {
    setVisibleCount(3);
  };

  return (
    <div className="relative text-white py-20" id="project" style={{ background: "#1a1a1a" }}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
        <h2 className="text-4xl font-semibold  mb-12 text-center">Things I've Built</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-green-500 mb-4">{project.technologies}</p>
              <div className="flex flex-col space-y-2">
                <a
                  href={project.github}
                  className="text-green-400 hover:underline hover:text-green-500 decoration-green-500 hover:decoration-2 focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source
                </a>
                <a
                  href={project.demo}
                  className="text-green-400 hover:underline hover:text-green-500 decoration-green-500 hover:decoration-2 focus:outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          {visibleCount < projects.length ? (
            <button
              onClick={showMoreProjects}
              className="font-medium text-green-400 hover:text-green-500  focus:outline-none"
            >
              <i class="fa-solid fa-angle-down"></i> View More
            </button>
          ) : (
            <button
              onClick={showLessProjects}
              className="font-medium text-green-400 hover:text-green-500 focus:outline-none"
            >
             <i className="fa-solid fa-angle-up"></i> View Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;

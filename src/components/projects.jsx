import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import myrole from '../assets/user-role.svg';

const Projects = ({ setView, view }) => {
  const [listprojects] = useState([
    {
      image: "/public/Projects/screencapture-localhost-5173-2025-01-16-22_39_56.png",
      name: "Portpolio",
      Des: "A modern and fully responsive portfolio website designed to showcase personal projects, skills, and experiences. Built with a focus on clean UI and smooth navigation.",
      mission: "Frontend Developer",
      languages: "#html #css #js",
      frameworkicon: "/public/framework.png",
      frameworks: "#bootstrap",
      langicon: "/public/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/sa-takib.git",
      live: "https://sa-takib.vercel.app/"
    },
    {
      image: "/Projects/screencapture-nasafits-vercel-app-2025-01-16-22_23_26.png",
      name: "Nasa Fits",
      Des: "A visually engaging and responsive landing page inspired by space exploration. Built with React, this project emphasizes sleek design and modern interactivity.",
      mission: "Designer,Full-Stack-developer",
      languages: "#html #css #js",
      frameworkicon: "/framework.png",
      frameworks: "#react",
      langicon: "/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/sa-takib.git",
      live: "https://nasafits.vercel.app/"
    },
    {
      image: "/Projects/screencapture-feedbacksnet-vercel-app-2025-01-16-22_23_47.png",
      name: "Feedback.net",
      Des: "A user-friendly feedback collection platform designed with React. This project highlights interactive components and a clean, professional UI layout.",
      mission: "Frontend Developer",
      languages: "#html #css #js",
      frameworkicon: "/framework.png",
      frameworks: "#react",
      langicon: "/public/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/feedback.com.git",
      live: "https://feedbacksnet.vercel.app/"
    },
    {
      image: "/public/Projects/screencapture-taskmanager-app-virid-vercel-app-2025-01-16-22_26_49.png",
      name: "Task Manager",
      Des: "A lightweight task management app that allows users to organize their daily activities efficiently. Built with React, it features responsive design and smooth user interactions.",
      mission: "Frontend Developer",
      languages: "#html #css #js",
      frameworkicon: "/public/framework.png",
      frameworks: "#react",
      langicon: "/public/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/taskmanager.app.git",
      live: "https://taskmanager-app-virid.vercel.app/"
    },
    {
      image: "/public/fullsize.png",
      name: "Aniwatch Clone",
      Des: "A replica of the Aniwatch.tv streaming platform, featuring dynamic sections for trending shows, carousels, and more. Built with HTML, CSS, and JavaScript, focusing on responsive and interactive design.",
      mission: "Frontend Developer",
      languages: "#html #css #js",
      frameworkicon: "/public/framework.png",
      frameworks: "#bootstrap",
      langicon: "/public/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/aniwatchclone.git",
      live: "https://takib-ahmed.github.io/aniwatchclone/"
    }
  ]);
  

  const projectContainerRef = useRef(null);
  const changeViewButtonRef = useRef(null);
  const boxesRef = useRef([]);

  const handleMouseMove = (e, index) => {
    const box = boxesRef.current[index];
    if (box) {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      box.style.setProperty("--x", `${x}px`);
      box.style.setProperty("--y", `${y}px`);
    }
  };

  const handleResize = () => {
    setView(window.innerWidth < 1240 ? "grid" : "list");
  };

  useEffect(() => {
    // Ensure the initial render sets the correct view
    handleResize();

    // Add event listeners for resize and orientation changes
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      // Cleanup listeners on unmount
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return (
    <>
      <section className="projects" id="projects">
        <h1 className="title">This is my Projects</h1>
        <h2 className="subtitle">
          Take a Glimpse Into My Creative Journey Through Code and Design
        </h2>

        <div className="projectcontaier">
          <div
            className="Gridlistbutton flex justify-center items-center space-x-4 mt-5"
            id="changview"
            ref={changeViewButtonRef}
          >
            <button
              className={`px-4 py-2 text-white rounded-md ${
                view === "list" ? "bg-[#be24a9]" : "bg-[#010824] hover:bg-[#be24a9]"
              }`}
              onClick={() => setView("list")}
            >
              <img
                src="/public/list-47-512.png"
                alt=""
                className="invert w-5"
              />
            </button>
            <a href="#projects">
              <button
                className={`px-4 py-2 text-white rounded-md ${
                  view === "grid" ? "bg-[#be24a9]" : "bg-[#010824] hover:bg-[#be24a9]"
                }`}
                onClick={() => setView("grid")}
              >
                <img src="/public/menu.png" alt="" className="invert w-5" />
              </button>
            </a>
          </div>

          <div
            className={`grid gap-60 mt-20 w-fit ${
              view === "list"
                ? "projectlist"
                : "projectlist2 justify-center lg:justify-normal"
            }`}
            ref={projectContainerRef}
          >
            {listprojects.map((value, key) => (
              <div
                className="projectcard relative flex justify-around"
                key={key}
                style={{ "--position": key + 1 }}
                ref={(el) => (boxesRef.current[key] = el)}
                onMouseMove={(e) => handleMouseMove(e, key)}
              >
                <div className="cover relative">
                  <img src={value.image} alt="" />
                  <div className="flex absolute right-2 top-2 gap-1.5">
                    <a href={value.github}>
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="github text-white"
                      ></FontAwesomeIcon>
                    </a>
                    <a href={value.live}>
                      <FontAwesomeIcon
                        icon={faEye}
                        className="livelink text-white eye"
                      ></FontAwesomeIcon>
                    </a>
                  </div>
                </div>
                <div className="details grid gap-0">
                  <h3 className="name">{value.name}</h3>
                  <p className="des">{value.Des}</p>
                  <div className="mission flex gap-4">
                    <img
                      className={`w-9 ${view === "list" && "invert"}`}
                      src={myrole}
                      alt=""
                    />
                    <div>
                      <p className="text-black">Mission</p>
                      {value.mission}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myrole from "../assets/user-role.svg";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import { useRef } from "react";
import Slider from "react-slick";

const Projects = ({ setView, view }) => {
  const listprojects = [
    {
      image: "/Projects/screencapture-localhost-5173-2025-01-16-22_39_56.png",
      name: "Portpolio",
      Des: "A modern and fully responsive portfolio website designed to showcase personal projects, skills, and experiences.",
      mission: "Frontend",
      languages: "#html #css #js",
      frameworkicon: "/framework.png",
      frameworks: "#react",
      langicon: "/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/sa-takib.git",
      live: "https://sa-takib.vercel.app/",
    },
    {
      image: "/Projects/nasafits.com.png",
      name: "Ecommerce Site",
      Des: "A full-stack e-commerce site with user auth, product management, cart, secure checkout, user & admin dashboard.",
      mission: "Brand, Grapic & UI Design, Full-Stack",
      languages: "#html #css #js",
      frameworkicon: "/framework.png",
      frameworks: ["#react", " #talwind"],
      langicon: "/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/nasafits.git",
      live: "https://nasafits.vercel.app/",
    },
    {
      image: "/Projects/feedback.net.png",
      name: "Feedback Platform",
      Des: "A user-friendly feedback three-page platform (Home, Search, Details) with search functionality and interactive sliders for a smooth user experience.",
      mission: "Frontend",
      languages: "#html #css #js",
      frameworkicon: "/framework.png",
      frameworks: "#react",
      langicon: "/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/feedback.com.git",
      live: "https://feedbacksnet.vercel.app/",
    },
    {
      image: "/Projects/taskmanager.png",
      name: "Task Manager",
      Des: "A lightweight task management app that allows users to organize their daily activities efficiently.",
      mission: "Frontend",
      languages: "#html #css #js",
      frameworkicon: "/framework.png",
      frameworks: "#react",
      langicon: "/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/taskmanager.app.git",
      live: "https://taskmanager-app-virid.vercel.app/",
    },
    {
      image: "/Projects/aniwatch.clone.png",
      name: "Aniwatch Clone",
      Des: "A replica of the Aniwatch.tv streaming platform, featuring dynamic sections for trending shows, carousels, and more.",
      mission: "Frontend",
      languages: "#html #css #js",
      frameworkicon: "/framework.png",
      frameworks: "#bootstrap",
      langicon: "/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/aniwatchclone.git",
      live: "https://takib-ahmed.github.io/aniwatchclone/",
    },
  ];

  const projectContainerRef = useRef(null);
  const changeViewButtonRef = useRef(null);
  const contracts = document.querySelectorAll(".contract");

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

  // useEffect(() => {
  //   const observerCallback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (changeViewButtonRef.current) {
  //         changeViewButtonRef.current.style.display = entry.isIntersecting  && window.innerWidth > 1240
  //           ? "block"
  //           : "none";
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(observerCallback, {
  //     threshold: 0.15,
  //   });

  //   if (projectContainerRef.current) {
  //     observer.observe(projectContainerRef.current);
  //   }

  //   return () => {
  //     if (projectContainerRef.current) {
  //       observer.unobserve(projectContainerRef.current);
  //     }
  //   };
  // }, []);
  // useEffect(() => {
  //   if(window.innerWidth < 1240){
  //     setView("grid" );
  //   }

  //   // const observerCallback = (entries) => {
  //   //   entries.forEach((entry) => {
  //   //     if (entry.isIntersecting && contracts) {
  //   //       changeViewButtonRef.current.style.display = entry.isIntersecting || window.innerWidth < 1240
  //   //         ? "none"
  //   //         : "block";
  //   //     }
  //   //   });
  //   // };

  //   // const observer = new IntersectionObserver(observerCallback, {
  //   //   threshold: 1,
  //   // });

  //   // if (contracts) {
  //   //   contracts.forEach(Contract => observer.observe(Contract));
  //   // }

  //   // return () => {
  //   //   if (contracts) {
  //   //     contracts.forEach(Contract => observer.unobserve(Contract));
  //   //   }
  //   // };
  // }, [contracts,setView]);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setView(window.innerWidth < 1240 ? "grid" : 'list');

  //     };

  //     // Listen for window resize events

  //     window.addEventListener("load", handleResize);
  // window.addEventListener("resize", handleResize);
  //     // Cleanup on unmount

  //   }, [setView]);

  var subsettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div className="p-1 absolute top-0 bg-black">
        <ul className="flex justify-center gap-0 mx-10 -translate-y-7">
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <>
      <section className=" projects   " id="projects">
        <h1 className="title text-[1.5em] md:text-[2.5em] lg:text-[5em]">
          This is my Projects
        </h1>
        <h2 className="subtitle    text-[1em] sm:text-[1.1em]">
          Take a Glimpse Into My Creative Journey Through Code and Design
        </h2>

        <div className="projectcontaier   ">
          {/* <div className="Gridlistbutton flex justify-center items-center space-x-4 mt-5  " id='changview' ref={changeViewButtonRef}>
      <button
        className={`px-4 py-2 text-white rounded-md ${
          view === "list" ? " bg-[#be24a9]" : "bg-[#010824] hover:bg-[#be24a9]"
        }`}
        onClick={() => setView("list")}
      >
  <img src="/list-47-512.png" alt="" className=' invert w-5' />
      </button>
      <a href="#projects"><button
        className={`px-4 py-2 text-white rounded-md ${
          view === "grid" ? "bg-[#be24a9]" : "bg-[#010824] hover:bg-[#be24a9]"
        }`}
        onClick={() => setView("grid")}
      >
        
      <img src="/menu.png" alt="" className=' invert w-5' />
      </button></a>
    </div> */}
          <div
            className={
              ` grid gap-60  mt-10 lg:mt-20 w-fit ` +
              ` ${
                view === "list"
                  ? "projectlist"
                  : "projectlist2 justify-center lg:justify-normal"
              }`
            }
        
          >
            {listprojects.map((value, key) => (
              <div
                className="projectcard relative   flex justify-around"
                key={key}
                style={{
                  "--position": key + 1,
                }}
                ref={(el) => (boxesRef.current[key] = el)}
                onMouseMove={(e) => {
                  handleMouseMove(e, key);
                }}
              >
                <div className="relative">
                  <div className=" cover   relative ">
                    <Slider {...subsettings} className=" min-w-full  top-0  ">
                    <img
                          src={value.image}
                          alt=""
                          className=" projectcover   "
                        />      <img
                        src={value.image}
                        alt=""
                        className=" projectcover   "
                      />      <img
                          src={value.image}
                          alt=""
                          className=" projectcover   "
                        />
                    </Slider>

                    <div className="flex  flex-wrap absolute right-2 top-3 gap-1.5">
                      <a href={value.github}>
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="   github  text-white  "
                        ></FontAwesomeIcon>
                      </a>
                      <a href={value.live}>
                        <FontAwesomeIcon
                          icon={faEye}
                          className="    livelink    text-white eye "
                        ></FontAwesomeIcon>
                      </a>
                    </div>
                  </div>
                  <div className="p-1  z-10 bg-black w-full absolute hidden">
                    <ul className="flex justify-center gap-0 mx-10 ">...</ul>
                  </div>
                </div>
                <div className="details grid gap-0 ">
                  <br className=" hidden sm:block" />
                  <div className="name mt-2.5 sm:mt-0">
                    <h3>{value.name}</h3>
                  </div>
                  <div className="des  description">
                    <p>{value.Des}</p>
                  </div>
                  <div className="grid gap-2">
                    <br className=" hidden sm:block" />
                    <div className="mission flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 mt-5 sm:mt-0   ">
                      <img
                        className={` w-9  invert   ` + `${view === "list" && "invert"}`}
                        src={myrole}
                        alt=""
                      />
                      <div>
                        <p className=" text-black  ">Mission</p>
                        {value.mission}
                      </div>
                    </div>
                    <div className="languages flex flex-wrap sm:flex-nowrap gap-2 sm:gap-10">
                      <div className=" flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
                        <img
                          src={value.langicon}
                          alt=""
                          className=" w-9 h-9   plicon"
                        />
                        {/* w-12 h-12 */}
                        <div>
                          <p className="  ">Languages</p>
                          <font className=" font-bold"> {value.languages}</font>
                        </div>
                      </div>
                      <div className=" flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
                        <img
                          src={value.frameworkicon}
                          alt=""
                          className=" w-9 h-9  plicon invert framework  "
                        />
                        <div className=" text-[#7711ED]">
                          <p className=" text-white  ">Library</p>
                          <font className="font-bold"> {value.frameworks}</font>
                        </div>
                      </div>
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

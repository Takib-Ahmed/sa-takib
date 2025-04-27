/* eslint-disable react/prop-types */

import { useRef } from "react";
import Slider from "react-slick";
import ProjectCard from "./projectcard";
import { useEffect, useState } from "react";
import Filtertabs from "./filtertab";
import { Reorder } from "motion/react"
const Projects = ({ setView, view }) => {
  const listprojects = [ {
    image: "/Projects/screencapture-thrivext-vercel-app-JavaScript-Essentials-for-React-Javascript-Key-Features-and-Concepts-2025-04-26-18_05_47.png",
 
    name: "Documentation",
    Des: "Thrivext — A modern documentation site built with Next.js and Nextra, led and managed by me with a collaborative team effort",
    mission: "Documentation",
    languages: "#html #css #js",
    frameworkicon: "/framework.png",
    frameworks: "#nextra #next.js #tailwind",
    langicon: "/programming-language-modified.png",
    github: "https://github.com/Takib-Ahmed/sa-takib.git",
    live: "https://thrivext.vercel.app/",
  } , {
    image: "/Projects/screencapture-mypay-zeta-vercel-app-2025-04-26-17_13_23.png",
 
    name: "Saas Landing Page",
    Des: "MyPay — A modern SaaS payment solution landing page, built with Next.js, TailwindCSS, and smooth animations.",
    mission: "Frontend",
    languages: "#html #css #js",
    frameworkicon: "/framework.png",
    frameworks: "#next.js #tailwind",
    langicon: "/programming-language-modified.png",
    github: "https://github.com/Takib-Ahmed/sa-takib.git",
    live: "https://mypay-zeta.vercel.app/",
  },  {
    image: "/Projects/nasafits.com.png",
    images:[
      '/Projects/nasafits.com.png',
      '/Projects/screencapture-nasafits-vercel-app-2025-03-21-23_56_12.png',
            // '/Projects/bannershow.png',
                  '/Projects/screencapture-nasafits-vercel-app-details-5-2025-03-22-00_15_54.png',
                  '/Projects/screencapture-nasafits-vercel-app-cart-2025-03-22-00_19_24.png',
                   '/Projects/screencapture-nasafits-vercel-app-checkout-2025-03-22-00_24_38.png',
                   '/Projects/screencapture-nasafits-vercel-app-profile-Dashboard-2025-03-22-00_27_40.png'


    ],
    name: "Ecommerce Site",
    Des: "A full-stack e-commerce site with user auth, product management, cart, secure checkout, user & admin dashboard.",
    mission: "Brand, Grapic & UI Design, Full-Stack",
    languages: "#html #css #js",
    frameworkicon: "/framework.png",
    frameworks: ['MERN Stack'],
    langicon: "/programming-language-modified.png",
    github: "https://github.com/Takib-Ahmed/nasafits.git",
    live: "https://nasafits.vercel.app/",
  },
    {
      image: "/Projects/porthome (2).png",
      images:[
        '/Projects/screencapture-mezzbancity-eta-vercel-app-2025-04-26-16_55_22.png',
        '/Projects/screencapture-mezzbancity-eta-vercel-app-2025-104-26-16_55_22.png',
        '/Projects/screencapture-mezzbancity-eta-vercel-app-cart-2025-04-26-17_50_27.png',
        '/Projects/screencapture-mezzbancity-eta-vercel-app-checkout-2025-04-26-17_51_30.png',
        

      
      ],
      name: "Resturant App",
      Des: "Mezzban City – A stylish restaurant website showcasing our menu, special dishes, and online booking. Built with Next.js and TailwindCSS, fully responsive and user-friendly.",
      mission: "Frontend",
      languages: "#html #css #js",
      frameworkicon: "/framework.png",
      frameworks: "#next.js #tailwind",
      langicon: "/programming-language-modified.png",
      github: "https://github.com/Takib-Ahmed/sa-takib.git",
      live: "https://mezzbancity-eta.vercel.app/",
    },

    {
      image: "/Projects/feedback.net.png",
      name: "Feedback Platform",
      images:["/Projects/feedback.net.png",
        '/Projects/screencapture-feedbacksnet-vercel-app-detailspage-2025-04-26-18_10_09.png',
      '/public/Projects/screencapture-feedbacksnet-vercel-app-search-2025-04-26-18_19_45.png'],

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


  const changeViewButtonRef = useRef(null);
  const contracts = document.querySelectorAll(".contract");

 const [toShow,setshow] = useState('All')
  const projectListedRef = useRef(null);


  useEffect(() => {
    if (window.innerWidth < 900) {
      setView("grid");
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && contracts) {
          changeViewButtonRef.current.style.display =
            entry.isIntersecting || window.innerWidth < 900 ? "none" : "block";
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 1,
    });

    if (contracts) {
      contracts.forEach((Contract) => observer.observe(Contract));
    }

    return () => {
      if (contracts) {
        contracts.forEach((Contract) => observer.unobserve(Contract));
      }
    };
  }, [contracts, setView]);

  useEffect(() => {
    const handleResize = () => {
      setView(window.innerWidth < 900 ? "grid":"list");
    };

    // Listen for window resize events

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    // Cleanup on unmount
  }, [setView]);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          changeViewButtonRef.current.style.display = "block";
        } else {
          changeViewButtonRef.current.style.display = "none";
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (projectListedRef.current) {
      observer.observe(projectListedRef.current);
    }

    return () => {
      if (projectListedRef.current) {
        observer.unobserve(projectListedRef.current);
      }
    };
  }, [projectListedRef]);




  let Projects = toShow==='All'? listprojects: listprojects.filter(project=>project.mission.includes(toShow))
  const [items, setItems] = useState(Projects)

  return (
      <section className=" projects   " id="projects">
        <h1 className="title text-[1.5em] md:text-[2.5em] lg:text-[5em]">
          This is my Projects
        </h1>
        <h2 className="subtitle    text-[1em] sm:text-[1.1em]">
          Take a Glimpse Into My Creative Journey Through Code and Design
        </h2>
<div className="pt-5">
<Filtertabs setshow={setshow}/>
</div>
        <div className="projectcontaier   "   >
          <div
            className="Gridlistbutton  justify-center items-center space-x-4 mt-5    w-full"
            id="changview"
            ref={changeViewButtonRef}
          >
            <button
              className={`px-4 py-2 text-white rounded-md ${
                view === "list"
                  ? " bg-[#be24a9]"
                  : "bg-[#010824] hover:bg-[#be24a9]"
              }`}
              onClick={() => setView("list")}
            >
              <img src="/list-47-512.png" alt="" className=" invert w-5" />
            </button>
            <a href="#projects">
              <button
                className={`px-4 py-2 text-white rounded-md ${
                  view === "grid"
                    ? "bg-[#be24a9]"
                    : "bg-[#010824] hover:bg-[#be24a9]"
                }`}
                onClick={() => setView("grid")}
              >
                <img src="/menu.png" alt="" className=" invert w-5" />
              </button>
            </a>
          </div>
          <Reorder.Group  values={items} onReorder={setItems}
            className={
              ` grid gap-60  mt-10 lg:mt-12 w-fit  projectlisted ` +
              ` ${
                view === "list"
                  ? "projectlist"
                  : "projectlist2 justify-center lg:justify-normal"
              }`
            }
            ref={projectListedRef}
          >
            {Projects.map((value, key) => (
        <ProjectCard key={key} view={view} KEY={key} value={value}/>
            ))}
          </Reorder.Group>
        </div>
      </section>

  );
};

export default Projects;

import logo from "../assets/logo_prev_ui.png";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./ui/Reavel";
import { motion } from "framer-motion";

export function Navbar({ view }) {
  const listnav = ["home", "skills", "projects", "contracts"];
  const navRefs = useRef([]); // Create a ref array for nav items
   const [isSmall, setIsSmall] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ container now uses `isSmall` correctly
  const container = (delay) => ({
    hidden: {
      opacity: 0,
      y: isSmall ? 5 : 10,
    },
    show:{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });
  // Define thresholds for each section
  const [thresholds, settherosholds] = useState({
    home: 0.5,
    skills: 0.3,
    projects: view === "grid" ? 0.27 : 0.1,
    contracts: 0.5,
  });

  useEffect(() => {
    window.innerWidth < 500
      ? settherosholds({
          home: 0.5,
          skills: 0.5,
          projects: view === "grid" && 0.15,
          contracts: 0.4,
        })
      : settherosholds({
          home: 0.5,
          skills: 0.3,
          projects: view === "grid" ? 0.27 : 0.1,
          contracts: 0.5,
        });
  }, [view]);

  useEffect(() => {
    const observers = []; // Array to hold observers

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const navLink = navRefs.current.find(
          (ref) => ref && ref.getAttribute("href") === `#${entry.target.id}` // Match href with section ID
        );
        if (navLink) {
          if (entry.isIntersecting) {
            navLink.classList.add("active"); // Add active class when in view
          } else {
            navLink.classList.remove("active"); // Remove active class when out of view
          }
        }
      });
    };

    // Create an observer for each section with its specific threshold
    listnav.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const observer = new IntersectionObserver(observerCallback, {
          threshold: thresholds[section], // Use the specific threshold for each section
        });
        observer.observe(sectionElement); // Observe the corresponding section
        observers.push(observer); // Store the observer in the array
      }
    });

    return () => {
      // Cleanup observer on unmount
      observers.forEach((observer, index) => {
        const sectionElement = document.getElementById(listnav[index]);
        if (sectionElement) {
          observer.unobserve(sectionElement); // Unobserve the corresponding section
        }
      });
    };
  }, [listnav, thresholds]); // Dependency array includes listnav to re-run if it changes

  return (
    <>
      <header>
        <div className="logo">
          <motion.img
                     initial='hidden'
            whileInView={'show'}  viewport={{ once: true }} variants={{
    hidden: {
      opacity: 0,
      y: isSmall ? 5 : 10,
    },
    show:{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
    },
  }} src={logo} alt="" className="w-10 sm:w-20" />
        </div>
        <nav className="text-xs sm:text-base gap-5 sm:gap-16">
          {listnav.map((value, key) => (
      
                    <motion.a
                         variants={container(key*0.2)}
            initial='hidden'
            whileInView={'show'}  viewport={{ once: true }}
              key={key}
              ref={(el) => (navRefs.current[key] = el)}
              href={"#" + value}
            >
              {value}
            </motion.a>   
          
   
          ))}
        </nav>
      </header>
    </>
  );
}

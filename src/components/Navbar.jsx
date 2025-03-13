import logo from "../assets/logo_prev_ui.png";
import { useEffect, useRef } from "react";

export function Navbar({ view }) {
  const listnav = ["home", "skills", "projects", "contracts"];
  const navRefs = useRef([]); // Create a ref array for nav items

  // Define thresholds for each section
  const thresholds = {
    home: 0.5,
    skills: 0.3,
    projects: 0.1,
    contracts: 0.3,
  };

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
  }, [listnav]); // Dependency array includes listnav to re-run if it changes

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="" className="w-10 sm:w-20" />
        </div>
        <nav className="text-xs sm:text-base gap-5 sm:gap-16">
          {listnav.map((value, key) => (
            <a
              key={key}
              ref={(el) => (navRefs.current[key] = el)}
              href={"#" + value}
            >
              {value}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}

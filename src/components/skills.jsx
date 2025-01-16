import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import FakeCodeEditor from "./Skilldetailbox";

const Skills = () => {
  const [listskills] = useState([
    { name: "HTML", icon: faHtml5 },
    {
      name: "CSS",

      icon: faCss3,
    },

    {
      name: "Bootstrap",

      icon: faBootstrap,
    },
    {
      name: "talwindcss",
      icon: "",
    },
    {
      name: "Javascript",

      icon: faJs,
    },
    {
      name: "Reactjs",

      icon: faReact,
    },
    {
      name: "git",

      icon: faGit,
    },
    {
      name: "Github",

      icon: faGithub,
    },
    {
      name: "VS CODE",

      icon: "",
    },
  ]);
  // Create a ref to store the list items
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Adding Reveal class");
          entry.target.classList.add("Reveal");
        } else {
          entry.target.classList.remove("Reveal");
        }
      });
    });

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item); // Ensure the item exists
    });

    // Cleanup observer on unmount
    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  // Ensure that the 9th element exists before adding a class

  return (
    <div className=" ">
      <section className="skills my-10 mt-20" id="skills">
        <div className="des">My Skills</div>
        <div className="title">Technologies That I know</div>
        <br />
        <br />
        <div className="listanimation  ">
          {" "}
          <div className="list ">
            {listskills.map((value, key) => (
              <div
           

              style={{
                transitionDelay: `${key * 150}ms`, // Direct transition-delay per item
              }}
                key={key}
                ref={(el) => (itemRefs.current[key] = el)} // Assign refs to each item
                className="item Hidden" // Default class is Hidden
              >
                <FontAwesomeIcon icon={value.icon}></FontAwesomeIcon>
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
              </div>
            ))}
          </div>
        </div>
      
  
      </section>
      {/* <section className="wrapper overflow-hidden w-full">
        <div id="stars" className="w-full left-0"></div>
        <div id="stars2" className="w-full left-0"></div>
        <div id="stars3" className="w-full left-0"></div>
      </section> */}
    </div>
  );
};

export default Skills;

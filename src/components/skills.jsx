
import { useEffect, useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { SiNextui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCss3 } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Vscode from "./svgs/vscode";
const Skills = () => {
  const [listskills] = useState([
    { name: "Next.js", icon: SiNextdotjs, color: '#fff', size: 85 },
    { name: "React.js", icon: FaReact, color: '#61DAFB', size: 85 },
    { name: "TypeScript", icon: BiLogoTypescript, color: '#3178C6', size: 90},
    { name: "JavaScript", icon: IoLogoJavascript, color: '#F7DF1E', size: 85 },
   
    { name: "Shadcn", icon: SiShadcnui, color: '#fff', size: 80 },
    { name: "Next UI", icon: SiNextui, color: '#fff', size: 85 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: '#38BDF8', size: 85 },
    { name: "Bootstrap", icon: FaBootstrap, color: '#7711ED', size: 85 },
    { name: "Node.js", icon: FaNodeJs, color: 'green', size: 85 },
    { name: "Express", icon: SiExpress, color: '#fff', size: 85 },
    { name: "MongoDB", icon: SiMongodb, color: 'green', size: 85 },

    { name: "Git", icon: FaGit, color: '#F05032', size: 85 },
    { name: "GitHub", icon: FaGithub, color: '#fff', size: 85 },
    { name: "CSS", icon: SiCss3, color: '#1572B6', size: 85 },
    { name: "HTML", icon: faHtml5, color: '#E34F26', size: 85 },
    { name: "VS Code", color: '#007ACC', size: 85 },
  ]);
  
  
  // Create a ref to store the list items
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Adding Reveal class");
          entry.target.classList.add("Reveal");
          observer.unobserve(entry.target); // একবার observe করে unobserve করবে
        }
      });
    });

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect(); // সব observer বন্ধ করা হবে

  }, []);

  // Ensure that the 9th element exists before adding a class
  const [screenSize, setScreenSize] = useState(() => window.innerWidth); // ✅ Use function to initialize state

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);






  return (
    <div className=" ">
      <section className="skills   md:my-5 lg:my-5 p-[25px]  sm:p-[50px]" id="skills">
        <div className="des">My Skills</div>
        <div className="title text-[1.8em] md:text-[2.5em] lg:text-[3em]">Technologies That I know</div>
        <br />
        <br />
        <div className="listanimation  ">
          {" "}
          <div className="list  items-center  sm:mt-5 md:mt-10 lg:mt-12"  >
            {listskills.map((value, key) => (
              <div
           

              style={screenSize ? { transitionDelay: `${key * 150}ms` } : {}}
                key={key}
                ref={(el) => (itemRefs.current[key] = el)} // Assign refs to each item
                className={`item Hidden items-center justify-center ${value.name === 'Bootstrap' && screenSize<373  ? ' hidden':""}`} // Default class is Hidden
              >
{value.icon ? 
  (value.name === 'HTML' ? 
    <FontAwesomeIcon icon={value.icon}    style={{ color: value.color , fontSize:screenSize>=768? '90px':'45px'}} /> 
    : <value.icon 
     
        className={`shadow  items-center  `} 
        style={{ color: value.color }} 
        size={screenSize>=768? value.size:40} 
        
      /> 
  ) 
  : <><Vscode  size={screenSize>=768? 70:35}/><div className="h-2 " ></div></>
}

         
                <h3 className="  text-[0.5rem]  sm:text-xs text-wrap  md:text-sm lg:text-base">{value.name}</h3>
              
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


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
  const [isLgScreen, setIsLgScreen] = useState(false);

  // Monitor screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLgScreen(window.innerWidth >= 1024); // Tailwind's lg breakpoint
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup
  }, []);
  return (
    <div className=" ">
      <section className="skills my-10 " id="skills">
        <div className="des">My Skills</div>
        <div className="title">Technologies That I know</div>
        <br />
        <br />
        <div className="listanimation  ">
          {" "}
          <div className="list "  >
            {listskills.map((value, key) => (
              <div
           

              style={isLgScreen ? { transitionDelay: `${key * 150}ms` } : {}}
                key={key}
                ref={(el) => (itemRefs.current[key] = el)} // Assign refs to each item
                className="item Hidden" // Default class is Hidden
              >
{value.icon ? 
  (value.name === 'HTML' ? 
    <FontAwesomeIcon icon={value.icon}    style={{ color: value.color , fontSize:'90px'}} /> 
    : <value.icon 
     
        className={`shadow  `} 
        style={{ color: value.color }} 
        size={value.size} 
        
      /> 
  ) 
  : <div className="h-8" />
}

         
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

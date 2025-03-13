
import { useEffect, useState } from "react";
import { useRef } from "react";
import { FaHtml5 } from "react-icons/fa";
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
import SkillCard from "./skillcard";
const Skills = () => {
  const listskills = [
    { name: "Next.js", icon: SiNextdotjs, color: '#fff', size: 85, skill:95  },
    { name: "React.js", icon: FaReact, color: '#61DAFB', size: 85 ,skill :50 },
    { name: "TypeScript", icon: BiLogoTypescript, color: '#3178C6', size: 90, skill:95 },
    { name: "JavaScript", icon: IoLogoJavascript, color: '#F7DF1E', size: 85 , skill:80},
   
    { name: "Shadcn", icon: SiShadcnui, color: '#fff', size: 80 ,skill:50             },
    { name: "Next UI", icon: SiNextui, color: '#fff', size: 85 ,    skill:70        },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: '#38BDF8', size: 85, skill:95 },
    { name: "Bootstrap", icon: FaBootstrap, color: '#7711ED', size: 85 , skill:90},
    { name: "Node.js", icon: FaNodeJs, color: 'green', size: 85 ,skill:50},
    { name: "Express", icon: SiExpress, color: '#fff', size: 85, skill:50 },
    { name: "MongoDB", icon: SiMongodb, color: 'green', size: 85, skill:50 },

    { name: "Git", icon: FaGit, color: '#F05032', size: 85, skill:80 },
    { name: "GitHub", icon: FaGithub, color: '#fff', size: 85, skill:90 },
    { name: "CSS", icon: SiCss3, color: '#1572B6', size: 85, skill:95 },
    { name: "HTML", icon: FaHtml5, color: '#E34F26', size: 85, skill:95 },
    { name: "VS Code", color: '#007ACC', size: 85 , skill:95},
  ]
  
  
  // Create a ref to store the list items
  const itemRefs = useRef([]);
const [Revealed,setReveled] = useState([])
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("Reveal");
        setReveled((prev)=>[...prev,entry.target.classList])
        
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
    <div className=" flex justify-end ">
      <section className="skills   md:my-5 lg:my-5 p-[25px]   sm:p-[50px]" id="skills">
        <div className="des">My Skills</div>
        <div className="title text-[1.8em] md:text-[2.5em] lg:text-[3em]">Technologies That I know</div>
        <br />
        <br />
        <div className="listanimation  ">
          {" "}
          <div className="list items-center  sm:mt-5 md:mt-10 lg:mt-12 grid grid-cols-4 w-full skilllist "  >
            {listskills.map((value, key) => (
       <SkillCard key={key} value={value} KEY={key} Revealed={Revealed} itemRefs={itemRefs}   screenSize={screenSize}/>
            ))}
          </div>
        </div>
      
  
      </section>
    </div>
  );
};

export default Skills;

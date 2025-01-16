/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import project from '../assets/project.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import myrole from '../assets/user-role.svg'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { useEffect } from 'react'
import { useRef } from 'react'

const Projects = ({setView,view}) => {
  const [listprojects] = useState([
    {
    image:"/public/fullsize.png",
    name:"Aniwatch Clone"
    ,
    Des:"This is a fully responsive web application replicating the Aniwatch.tv streaming platform's interface. It features a dynamic display of popular anime series, top airing shows, and upcoming releases. The design includes interactive elements such as carousels, user comment sections, and trending posts. Built with HTML, CSS, and JavaScript, the clone emphasizes clean UI/UX principles, showcasing a modern, visually rich streaming site experience."
    ,
    mission:'Frontend Developer'
    ,
    languages:"#html #css  #js",
    frameworkicon:'/public/framework.png',
    frameworks:'#bootstrap',
    langicon:'/public/programming-language-modified.png'
  },
  {
    image:"/public/screencapture-takib-ahmed-github-io-aniwatchclone-2024-10-18-20_29_02 (1).png",
    name:"Aniwatch Clone"
    ,
    Des:"This is a fully responsive web application replicating the Aniwatch.tv streaming platform's interface. It features a dynamic display of popular anime series, top airing shows, and upcoming releases. The design includes interactive elements such as carousels, user comment sections, and trending posts. Built with HTML, CSS, and JavaScript, the clone emphasizes clean UI/UX principles, showcasing a modern, visually rich streaming site experience."
    ,
    mission:'Frontend Developer'
    ,
    languages:"#html #css  #js",
    frameworkicon:'/public/framework.png',
    frameworks:'#bootstrap',
    langicon:'/public/programming-language-modified.png'
  } ,
  {
    image:"/public/fullsize.png",
    name:"Aniwatch Clone"
    ,
    Des:"This is a fully responsive web application replicating the Aniwatch.tv streaming platform's interface. It features a dynamic display of popular anime series, top airing shows, and upcoming releases. The design includes interactive elements such as carousels, user comment sections, and trending posts. Built with HTML, CSS, and JavaScript, the clone emphasizes clean UI/UX principles, showcasing a modern, visually rich streaming site experience."
    ,
    mission:'Frontend Developer'
    ,
    languages:"#html #css  #js",
    frameworkicon:'/public/framework.png',
    frameworks:'#bootstrap',
    langicon:'/public/programming-language-modified.png'
  },  
  {
    image:"/public/fullsize.png",
    name:"Aniwatch Clone"
    ,
    Des:"This is a fully responsive web application replicating the Aniwatch.tv streaming platform's interface. It features a dynamic display of popular anime series, top airing shows, and upcoming releases. The design includes interactive elements such as carousels, user comment sections, and trending posts. Built with HTML, CSS, and JavaScript, the clone emphasizes clean UI/UX principles, showcasing a modern, visually rich streaming site experience."
    ,
    mission:'Frontend Developer'
    ,
    languages:"#html #css  #js",
    frameworkicon:'/public/framework.png',
    frameworks:'#bootstrap',
    langicon:'/public/programming-language-modified.png'
  },   
  {
    image:"/public/fullsize.png",
    name:"Aniwatch Clone"
    ,
    Des:"This is a fully responsive web application replicating the Aniwatch.tv streaming platform's interface. It features a dynamic display of popular anime series, top airing shows, and upcoming releases. The design includes interactive elements such as carousels, user comment sections, and trending posts. Built with HTML, CSS, and JavaScript, the clone emphasizes clean UI/UX principles, showcasing a modern, visually rich streaming site experience."
    ,
    mission:'Frontend Developer'
    ,
    languages:"#html #css  #js",
    frameworkicon:'/public/framework.png',
    frameworks:'#bootstrap',
    langicon:'/public/programming-language-modified.png'
  }])

  const projectContainerRef = useRef(null);
  const changeViewButtonRef = useRef(null);
const contracts = document.querySelectorAll('.contract');



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


  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (changeViewButtonRef.current) {
          changeViewButtonRef.current.style.display = entry.isIntersecting  && window.innerWidth > 1240
            ? "block"
            : "none";
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.15,
    });

    if (projectContainerRef.current) {
      observer.observe(projectContainerRef.current);
    }

    return () => {
      if (projectContainerRef.current) {
        observer.unobserve(projectContainerRef.current);
      }
    };
  }, []);
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && contracts) {
          changeViewButtonRef.current.style.display = entry.isIntersecting || window.innerWidth < 1240
            ? "none"
            : "block";
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 1,
    });

    if (contracts) {
      contracts.forEach(Contract => observer.observe(Contract));
    }

    return () => {
      if (contracts) {
        contracts.forEach(Contract => observer.unobserve(Contract));
      }
    };
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setView(window.innerWidth < 1240 ? "grid" : 'list');

    };

    // Listen for window resize events

    window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);
    // Cleanup on unmount
 
  }, []);
  return (
    <>
      <section className="projects " id='projects' >
        <h1 className='title'>This is my Projects</h1>
        <h2 className='subtitle'>Take a Glimpse Into My Creative Journey Through Code and Design</h2>
       
       <div className="projectcontaier   ">
       <div className="Gridlistbutton flex justify-center items-center space-x-4 mt-5  " id='changview' ref={changeViewButtonRef}>
      <button
        className={`px-4 py-2 text-white rounded-md ${
          view === "list" ? " bg-[#be24a9]" : "bg-[#010824] hover:bg-[#be24a9]"
        }`}
        onClick={() => setView("list")}
      >
  <img src="/public/list-47-512.png" alt="" className=' invert w-5' />
      </button>
      <a href="#projects"><button
        className={`px-4 py-2 text-white rounded-md ${
          view === "grid" ? "bg-[#be24a9]" : "bg-[#010824] hover:bg-[#be24a9]"
        }`}
        onClick={() => setView("grid")}
      >
        
      <img src="/public/menu.png" alt="" className=' invert w-5' />
      </button></a>
    </div>
        <div className={` grid gap-60  mt-20 w-fit ` +` ${view =='list' ? 'projectlist':'projectlist2 justify-center lg:justify-normal'}`} ref={projectContainerRef}>
          
      {listprojects.map((value,key)=>(
            <div className="projectcard relative   flex justify-around" key={key} style={{
              '--position': key + 1}} ref={(el) => (boxesRef.current[key] = el)} onMouseMove={(e)=>{
                handleMouseMove(e,key)
              }}>

<div className="cover  relative ">
 <img src= {value.image} alt="" className='  ' />
<div className="flex absolute right-2 top-2 gap-1.5">
<a href="https://github.com/Takib-Ahmed/aniwatchclone.git"><FontAwesomeIcon icon={faGithub} className='   github  text-white  '></FontAwesomeIcon></a>
<a href="https://takib-ahmed.github.io/aniwatchclone/"><FontAwesomeIcon icon={faEye} className='        text-white eye '></FontAwesomeIcon></a>

</div>
</div>
         <div className="details grid gap-0 ">
          <br />
         <div className="name" >

              <h3>{value.name}</h3>
            </div> 
            <div className="des">
              <p>{value.Des}</p>

            </div>
   <div className="grid gap-2">
    <br />
   <div className="mission flex gap-4">
            <img  className={` w-9  ` + `${view==='list' && 'invert'}`} src={myrole} alt=""/ >
            <div>
  <p className=' text-black  '>Mission</p>
  {value.mission}
</div>
         </div>
<div className="languages flex  gap-10">
<div className=" flex gap-4">
       <img src={value.langicon} alt=""  className=' w-9 h-9   plicon'/>  
       {/* w-12 h-12 */}
       <div >
  <p className='  '>Languages</p>
<font className=' font-bold'>  {value.languages}</font>
</div>
</div> 
<div className=" flex gap-4">
       <img src={value.frameworkicon} alt=""  className=' w-9 h-9  plicon invert framework  '/>
       <div className=' text-[#7711ED]' >
  <p className=' text-white  '>Framwork</p>
<font className="font-bold">  {value.frameworks}</font>
</div>
</div> 
</div>
   </div>       

</div>

          </div>
      ))}
        </div></div>
      
      </section>
    </>
  )
}

export default Projects

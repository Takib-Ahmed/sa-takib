
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myrole from "../assets/user-role.svg";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {  useEffect, useRef, useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import Slider from "react-slick";
import { IoCodeSlashOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion, Reorder, useMotionValue, useTransform } from "motion/react"
export default function ProjectCard({KEY,value,view,scrollYProgress, scaleFactor,handleMouseMove,boxesRef,setActiveTab,  setHovered}){
  const [Isinview,setisinview] = useState()
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
    var subsettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // vertical: true,
        // verticalSwiping: true,
        // swipeToSlide: true,
        autoplay: Isinview,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        appendDots: dots => (
          <div
            style={{
              backgroundColor: "#ddd",
            
        
            }}
            className="    w-full  "
          >
            <ul style={{ margin: "0px" }} className="  flex gap-12  ps-2  -translate-y-[79px]  items-end relative   bg-[#010824] h-[25px]"> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
          style={{
        width:'70px',
            color: "blue",
          
          }}
            className="          bg-white rounded-none absolute "
          >
           <p className="  h-0.5   rounded-none "></p>
          </div>)
      };
    
      const scale = useTransform(scrollYProgress, [0, 1], [1, scaleFactor]);


  
      const x = useMotionValue(0.5);  // Start at center
      const y = useMotionValue(0.5);
    
      const rotateX = useTransform(y, [0, 1], [-15, 15]);
      const rotateY = useTransform(x, [0, 1], [15, -15]);

      function handleMouseMove2(e) {
        setHovered(true)
 
        const rect = e.currentTarget.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width;
        const mouseY = (e.clientY - rect.top) / rect.height;
        x.set(mouseX);
        y.set(mouseY);
        
      }
    
      function handleMouseLeave() {
        setHovered(false)
        x.set(0.5);
        y.set(0.5);

      }

      


//       useEffect(() => {
//         const observerCallback = (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
// setisinview(true)
//             } else {
//            setisinview(false)
//             }
//           });
//         };
    
//         const observer = new IntersectionObserver(observerCallback, {
//           threshold: 0.1,
//         });
    
//         if (sliderRef.current) {
//           observer.observe(sliderRef.current);
//         }
    
//         return () => {
//           if (sliderRef.current) {
//             observer.unobserve(sliderRef.current);
//           }
//         };
//       }, [sliderRef]);
    return (
        <>
              <Reorder.Item
 transition={{ type: "spring", stiffness: 150, damping: 20 }}
ref={(el) => (boxesRef.current[KEY] = el)}
onMouseMove={(e) => {
  handleMouseMove(e, KEY);
 view==='grid' &&  handleMouseMove2(e)
}}
onMouseEnter={() =>setActiveTab(KEY) }
onMouseLeave={() => {

  view==='grid' && handleMouseLeave()
}}
            drag={false}
                className="projectcard relative    flex justify-around origin-top"
                KEY={KEY}
                style={{
                  "--position": KEY + 1,
                  scale: view==='list' ?scale:1,
                  transformStyle: "preserve-3d",
                  rotateX,
                  rotateY,
                  perspective: 1500,
                }}
              
       
              >
                
        
            <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none"
          style={{
            opacity: useTransform(x, [0, 0.5, 1], [0.2, 0, 0.2]),
          }}
        >
      </motion.div>
                <div className="relative">
                  <div className={` cover   relative    overflow-hidden     `}> 
              

  {value.images ?  
  
    <Slider {...subsettings}  ref={sliderRef} className=" min-w-full  top-0   relative  " >
    {
      value.images.map((image,KEY)=>(

<a href={value.live}>
      
<img
        KEY={KEY}
        src={image}
        alt=""
        className=" projectcover  rounded-none  "
      /> 
</a>
      ))}
    
                    </Slider>  
            
            
            
  
                    
                    :
                    <a  href={value.live} className="  h-full  "> <img
                        src={value.image}
                        alt=""
                        className=" projectcover   "
                      /></a>   
                      // <video src="/public/Recording 2025-03-22 222631.mp4" autoPlay className="    h-full w-full  "></video>
                    // <iframe src={value.live} frameborder="0" className="  cover h-full"></iframe>
}



                    <div className="  flex-wrap absolute right-1.5 top-1.5  ">
                    <a href={value.github} className="w-9 h-9  cursor-pointer rounded-full flex items-center justify-center bg-gradient-to-r from-gray-700 to-black hover:from-gray-600 hover:to-gray-900 transition">
      <FaGithub size={18} className="text-white" />
    </a>
                      {/* <a href={value.github}>
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
                      </a> */}
                    </div>
                  </div>

               <div className={` flex w-full  justify-between gap-1   slider-dots   z-50 ${view!='grid' ? 'translate-y-4 ':'translate-y-1'}`}>
               {  value.images?.map((image,KEY)=>(
               <div          onClick={() => {
                sliderRef.current.slickGoTo(KEY); // Programmatically navigate to the clicked slide
                setCurrentSlide(KEY);
                 // Update currentSlide to reflect the navigation
              }}
              KEY={KEY}         className="  cursor-pointer w-full  h-full  py-2.5    top-0   relative    z-50     rounded-none  " >

<div
                        style={{
                  
                         
                          borderRadius:'10px'
                        
                        }}

                        onClick={() => {
                          setCurrentSlide(KEY);
                          sliderRef.current.slickGoTo(KEY); // Programmatically navigate to the clicked slide
                         
                           // Update currentSlide to reflect the navigation
                        }}
               
                          className="  cursor-pointer w-full  h-fit    top-0   relative    z-50     bg-white rounded-none  "
                        >
                         <div    onClick={() => {
                            setCurrentSlide(KEY);
                sliderRef.current.slickGoTo(KEY); // Programmatically navigate to the clicked slide
              
                 // Update currentSlide to reflect the navigation
              }}       className={`  h-[3.8px] z-50  rounded-2xl  ${
              currentSlide === KEY
                ? " bg-purple-500"
                : ""
            }`} ></div>
                         
                        </div>
               </div>
                        
                  ))}
                  
               </div>
                </div>
                <div className={`details grid items-center gap-0 ${KEY==1 &&  ' mt-2'}  `}>
                
              <div className={`${view==='grid'?"h-10  my-1.5": KEY===2 || KEY===1 ?" h-9 !my-0":" h-12 !my-0"} flex items-center justify-between`}>
                <a href={value.live} className={`name    sm:mt-0 flex items-center gap-2 hover:border-b w-fit   ${view==='grid' ?'':" border-[#ef0b0b]"}`}>
                    <h3  className="  ">{value.name}</h3><LuExternalLink className={`${view === 'grid'? 'text-2xl  ':'text-[#ef0b0b] text-4xl mb-1 '}   `}/>
                  </a>

              </div>
              
                  <div className="des  description">
                    <p>{value.Des}</p>
                  </div>
                  <br className=" hidden sm:block" />
                  <div className=" flex items-center justify-between sm:justify-normal  gap-2 gap-x-10 md:gap-y-5 md:gap-x-20 lg:gap-x-24 flex-wrap">
                 
                    <div className="mission flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 mt-5 sm:mt-0   ">
                      <img
                        className={
                          ` w-9  invert   ` + `${view === "list" && "invert"}`
                        }
                        src={myrole}
                        alt=""
                      />
                      <div>
                        <p className=" text-black  ">Mission</p>
                        {value.mission}
                      </div>
                    </div>
                    <div className="languages items-center flex flex-wrap sm:flex-nowrap gap-2 sm:gap-10">
                      {/* <div className=" flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
                        <img
                          src={value.langicon}
                          alt=""
                          className=" w-9 h-9   plicon"
                        />
                
                        <div>
                          <p className="  ">Languages</p>
                          <font className=" font-bold"> {value.languages}</font>
                        </div>
                      </div> */}
                      <div className={` flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 techs    ${ KEY===1?'' : 'mt-5 sm:mt-0'}`}>
                        <img
                          src={value.frameworkicon}
                          alt=""
                          className=" w-9 h-9  plicon invert framework  lg:mt-1"
                        />
                        <div className=" text-[#7711ED]">
                          <p className=" text-white title  text-left "></p>
                          <font className="font-bold"> {value.frameworks}</font>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reorder.Item></>
    );
}
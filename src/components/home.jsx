

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Download from "../assets/download (1).png"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { LuMessageCircleX } from "react-icons/lu";
import { LuMessageCircleMore } from "react-icons/lu";
import { LuMessageCirclePlus } from "react-icons/lu";
import { useState } from 'react'
import { motion } from 'motion/react'
const Home = () => {
const contractlinks = [
  {
    fonticon:faLinkedin,
color:"#0C64C5",

url:'https://www.linkedin.com/in/sa-takib/'

  },
  {
    fonticon:faGithub,
    color: 'black',
    url:'https://github.com/Takib-Ahmed',

  },  {
    fonticon:faYoutube,
    color: "red",
    url:'https://www.youtube.com/@EasyCodingDev'

  },  {
    fonticon:faWhatsapp,
color:"green",
url:'https://wa.me/01615081141'

  },
  {
    icon:LuMessageCircleMore,
   

  },{
    icon:LuMessageCircleX,
 
  }
]

const [isactive,setisactive] = useState(false)

  return (
    <div>
      
      <section className=" section home sm:m-5 md:m-0   gap-0    flex  lg:grid  lg:gap-10   p-[50px]" id='home' >
        <div className="content">
          <div className="  name  sm:pt-20"><span className='Myname'>SA Takib</span></div>
          
          <div className="profession "></div>
          <div className="des text-left "><p><span></span>
          I am a passionate and detail-oriented Junior Frontend Developer with a strong <br className='  hidden sm:block br' /> foundation in HTML, CSS, and JavaScript. I have hands-on experience working with <br className='hidden sm:block  br' /> modern frontend technologies such as Tailwind CSS, React, and Next.js to build <br className='hidden sm:block  br' />responsive and dynamic web applications.Passionate about clean code and efficient <br className='hidden sm:block  br' /> design, I focus on delivering fast, functional, and visually appealing websites.
          </p>

</div>
          <div className="links  flex  justify-around lg:justify-normal  sm:gap-5  items-center">
        
             <a href="/CV/Sa Takib.pdf" className='cv  sm:px-7 py-2.5 text-3xl md:text-4xl' download  ><div className=' px-2 md:px-0  flex  items-center  sm:gap-2'><p>CV</p> <img src={Download} alt="" className=' hidden sm:block  w-9 invert ' /></div></a>
             <a href="" className=' relative rounded-[100%]  text-4xl px-[1.05rem] py-[0.7rem] '><FontAwesomeIcon href='#' icon={faLinkedin}/></a><a href='https://github.com/Takib-Ahmed'  className=' relative rounded-[100%]  text-4xl px-[1.05rem] py-[0.7rem] '><FontAwesomeIcon icon={faGithub}/></a><a href='https://www.youtube.com/@EasyCodingDev'  className=' relative rounded-[100%]  text-4xl px-[0.85rem] py-[0.7rem]'><FontAwesomeIcon icon={faYoutube}/></a><a href='https://wa.me/01615081141' className=' relative rounded-[100%]  text-4xl px-[1.05rem] py-[0.7rem]' ><FontAwesomeIcon  icon={faWhatsapp}/></a></div></div>
        
        <div className=" avatar text-right   ">
          <div className="card   mb-0 md:my-0 inline-flex flex-col  h-[20rem] mt-8 sm:mt-0 sm:h-[100%]">
            <img src='/profile copy.png' alt="" className=' profile'  />
            <div className="info gap-2 sm:gap-3 md:gap-4  lg:gap-5 text-[0.7em] sm:text-xs   md:text-sm lg:text-[1em]">
              <div>Front tend developer</div>
              <div>Bangladeshi</div>
              <div>3/12</div>
              <div>Male</div>
            </div>
          </div>
        </div>


      </section>

<div className='  fc-container fixed right-0 top-0  h-full  flex justify-end items-end lg:justify-center lg:items-center  z-50 '>
   <div className={`fixedcontracts  contractlinks    translate-y-7 lg:translate-y-0  md:bottom-5 lg:bottom-0 ${isactive && 'hovered    lg:mb-0 '}    lg:mt-32   p-4 lg:p-1    flex flex-col  justify-start  lg:justify-center gap-5 sm:gap-10    w-max  items-center   rounded-l-[3.5rem]`} 
   
   onMouseEnter={()=>{
    setisactive(true)
   }}
   onMouseLeave={()=>
   {
    setisactive(false)
   }
   }
   
   >
        
        {/* <a href="/CV/Sa Takib.pdf" className='cv hidden hover:text-black  text-[20px] px-2 py-[0.45rem] rounded-full' download  ><div className=' grid  items-center  sm:gap-2'><p>CV</p> <img src={Download} alt="" className=' hidden   invert ' /></div></a> */}
  
     
        {
          contractlinks.map((links,key)=>(
            <motion.a   key={key}  href={links.url}  dragDirectionLock drag  dragConstraints={{
              left:0,
              right:0,
              top:-500,
              bottom:0
            }} className={` absolute  cursor-pointer  -translate-y-full bottom-6 md:bottom-0  right-4  lg:relative rounded-[100%]  px-2 py-[0.45rem] text-2xl lg:text-3xl flex justify-center items-center  ${links.icon && 'hover:text-[#010824]  '} `}>{links.fonticon ? <FontAwesomeIcon  icon={links.fonticon}/>: <motion.div whileTap={{
              scale:1.1
            }} 
            
            >
              
              <links.icon



            onClick={()=>{
              setisactive(!isactive)
            }}
      
            />
              </motion.div>}</motion.a> 
          ))
        }
        </div></div>
    </div>)

}

export default Home

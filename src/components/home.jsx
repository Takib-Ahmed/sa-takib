

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Download from "../assets/download (1).png"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { LuMessageCircleX } from "react-icons/lu";
import { LuMessageCircleMore } from "react-icons/lu";
import { LuMessageCirclePlus } from "react-icons/lu";
import { FaWhatsapp } from 'react-icons/fa'
const Home = () => {

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
             <a href="" className=' relative rounded-[100%]  text-4xl px-[1.05rem] py-[0.7rem] '><FontAwesomeIcon href='#' icon={faLinkedin}/></a><a href='https://github.com/Takib-Ahmed'  className=' relative rounded-[100%]  text-4xl px-[1.05rem] py-[0.7rem] '><FontAwesomeIcon icon={faGithub}/></a><a href='https://www.instagram.com/md.takeb'  className=' relative rounded-[100%]  text-4xl px-[1.05rem] py-[0.7rem]'><FontAwesomeIcon icon={faInstagram}/></a><a href='https://wa.me/01615081141' className=' relative rounded-[100%]  text-4xl px-[1.05rem] py-[0.7rem]' ><FontAwesomeIcon  icon={faWhatsapp}/></a></div></div>
        
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
   <div className='  hidden fixed   bottom-5 right-5 flex bg-[#010824] invert w-[6rem] z-50 rounded-full  p-2  items-center justify-between'>

 connect   <LuMessageCirclePlus />
   </div>
<div className='  fc-container fixed right-0 top-0  h-screen  flex justify-end items-end lg:justify-center lg:items-center  z-50 '>
   <div className="links fixedcontracts  lg:mt-32   p-4 lg:p-1    flex flex-col  justify-start  lg:justify-center gap-5 sm:gap-10    w-max  items-center   rounded-r-[3.5rem]">
        
        {/* <a href="/CV/Sa Takib.pdf" className='cv hidden hover:text-black  text-[20px] px-2 py-[0.45rem] rounded-full' download  ><div className=' grid  items-center  sm:gap-2'><p>CV</p> <img src={Download} alt="" className=' hidden   invert ' /></div></a> */}
        <a href="" className=' absolute  -translate-y-full right-4  lg:relative rounded-[100%]  px-2 py-[0.45rem] text-2xl lg:text-3xl flex justify-center items-center  '><FontAwesomeIcon href='#' icon={faLinkedin}/></a><a href='https://github.com/Takib-Ahmed'  className='flex justify-center items-center absolute  -translate-y-full right-4  lg:relative rounded-[100%] text-2xl lg:text-3xl px-2 py-[0.45rem] '><FontAwesomeIcon icon={faGithub}/></a><a href='https://www.instagram.com/lg.takeb'  className=' flex justify-center items-center px-2 py-[0.45rem]  absolute  -translate-y-full right-4  lg:relative rounded-[100%] text-2xl lg:text-3xl '><FontAwesomeIcon icon={faInstagram}/></a><a href='https://wa.me/01615081141' className='flex justify-center items-center px-2 py-[0.45rem] absolute  -translate-y-full right-4  lg:relative rounded-[100%] text-2xl lg:text-3xl  ' ><FontAwesomeIcon  icon={faWhatsapp}/></a>
        
        <a  className='flex   justify-center items-center px-2 py-[0.45rem] absolute  -translate-y-full right-4  lg:relative rounded-[100%] text-2xl lg:text-3xl  ' > <FaWhatsapp /></a>
        <a  className='flex   justify-center items-center px-2 py-[0.45rem] absolute  -translate-y-full right-4  lg:relative rounded-[100%] text-2xl lg:text-3xl  ' > <LuMessageCircleX /></a>
        
        </div></div>
    </div>)

}

export default Home

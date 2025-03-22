

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Download from "../assets/download (1).png"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { RiMessage3Fill } from "react-icons/ri";
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
          <div className="links  flex  justify-between lg:justify-normal  sm:gap-5  items-center">
        
             <a href="/CV/Sa Takib.pdf" className='cv' download  ><div className=' flex  gap-2'><p>CV</p> <img src={Download} alt="" className=' hidden sm:block mt-2 w-7 h-7 invert ' /></div></a>
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

 connect   <RiMessage3Fill />
   </div>
    </div>)

}

export default Home

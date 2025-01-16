import React from 'react'
import profile from '../assets/profile2.png'
import CV from '../assets/pngegg (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Download from "../assets/download (1).png"
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Home = () => {

  return (
    <div>
      
      <section className="home m-5 md:m-0     flex-col   lg:grid  lg:gap-10  " id='home'>
        <div className="content">
          <div className="name"><span className='myname'>SA Takib</span></div>
          
          <div className="profession"></div>
          <div className="des "><p><span></span>
          I am a passionate and detail-oriented Junior Frontend Developer with a strong <br className=' br' /> foundation in HTML, CSS, and JavaScript. I have hands-on experience working with <br className=' br' /> modern frontend technologies such as Tailwind CSS, React, and Next.js to build <br className=' br' />responsive and dynamic web applications.Passionate about clean code and efficient <br className=' br' /> design, I focus on delivering fast, functional, and visually appealing websites.
          </p>

</div>
          <div className="links flex gap-5 ">
             <a href="#" className='cv'><div className=' flex gap-2'><p>CV</p> <img src={Download} alt="" className=' mt-2 w-7 h-7 invert ' /></div></a>
             <a href="" className=' relative'><FontAwesomeIcon href='#' icon={faLinkedin}/></a><a href='https://github.com/Takib-Ahmed' ><FontAwesomeIcon icon={faGithub}/></a><a href='https://www.instagram.com/md.takeb'><FontAwesomeIcon icon={faInstagram}/></a><a href='https://wa.me/01615081141'><FontAwesomeIcon  icon={faWhatsapp}/></a></div></div>
        
        <div className=" avatar text-right   ">
          <div className="card   mb-0 md:my-0 inline-flex flex-col w-100 ">
            <img src='/public/profile copy.png' alt="" className=' profile' />
            <div className="info">
              <div>Front tend developer</div>
              <div>Bangladeshi</div>
              <div>3/12</div>
              <div>Male</div>
            </div>
          </div>
        </div>


      </section>
   
    </div>)

}

export default Home

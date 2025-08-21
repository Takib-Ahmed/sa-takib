import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Download from "../assets/download (1).png";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { LuMessageCircleX } from "react-icons/lu";
import { LuMessageCircleMore } from "react-icons/lu";
import { LuMessageCirclePlus } from "react-icons/lu";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "./ui/Reavel";
import { useEffect } from "react";

const Home = () => {
  const [isSmall, setIsSmall] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ container now uses `isSmall` correctly
  const container = (delay) => ({
    hidden: {
      opacity: 0,
      x: isSmall ? 20 : 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });
  const contractlinks = [
    {
      fonticon: faLinkedin,
      color: "#0C64C5",

      url: "https://www.linkedin.com/in/sa-takib/",
    },
    {
      fonticon: faGithub,
      color: "black",
      url: "https://github.com/Takib-Ahmed",
    },
    {
      fonticon: faYoutube,
      color: "red",
      url: "https://www.youtube.com/@EasyCodingDev",
    },
    {
      fonticon: faWhatsapp,
      color: "green",
      url: "https://wa.me/01615081141",
    },
    {
      icon: LuMessageCircleMore,
    },
    {
      icon: LuMessageCircleX,
    },
  ];

  const [isactive, setisactive] = useState(false);
  const homeRef = useRef(null);
  const [showFloatingIcons, setShowFloatingIcons] = useState(false);

  useEffect(() => {
    let observer = null;

    const createObserver = () => {
      // পুরনো observer থাকলে unobserve করে দাও
      if (observer && homeRef.current) {
        observer.unobserve(homeRef.current);
        observer.disconnect();
      }

      if (window.innerWidth >= 1325 && homeRef.current) {
        observer = new IntersectionObserver(
          ([entry]) => {
            setShowFloatingIcons(!entry.isIntersecting);
          },
          {
            root: null,
            threshold: 0,
          }
        );
        observer.observe(homeRef.current);
      } else {
        setShowFloatingIcons(true);
      }
    };

    // প্রথমবার রান করাও
    createObserver();

    // রিসাইজে আবার observer সেট করো
    window.addEventListener("resize", createObserver);

    return () => {
      if (observer && homeRef.current) {
        observer.unobserve(homeRef.current);
        observer.disconnect();
      }
      window.removeEventListener("resize", createObserver);
    };
  }, []);

  return (
    <div>
      <section
        className=" section home sm:m-5 md:m-0   gap-0    flex  lg:grid  lg:gap-10   p-[50px]"
        id="home"
      >
        <div ref={homeRef} className="content">
          <div className=" name  sm:pt-20 flex justify-center  min-[1109px]:justify-start ">
            <Reveal dimention="-y">
              <span className="Myname">SA Takib</span>
            </Reveal>
          </div>
          <div className=" flex justify-center   min-[1109px]:justify-start  ">
            <Reveal dimention="y">
              <div className="profession  "></div>
            </Reveal>
          </div>

          <div className="des text-left ">
            <Reveal Slider={true} className="  bg-e945e4">
              <div>
                <p>
                  <span></span>
                  I am a passionate and detail-oriented Junior Frontend
                  Developer with a strong{" "}
                  <br className="  hidden sm:block br" /> foundation in HTML,
                  CSS, and JavaScript. I have hands-on experience working with{" "}
                  <br className="hidden sm:block  br" /> modern frontend
                  technologies such as Tailwind CSS, React, and Next.js to build{" "}
                  <br className="hidden sm:block  br" />
                  responsive and dynamic web applications.Passionate about clean
                  code and efficient <br className="hidden sm:block  br" />{" "}
                  design, I focus on delivering fast, functional, and visually
                  appealing websites.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="links  flex  justify-around lg:justify-normal  sm:gap-5  items-center">
            <motion.a
              variants={container(0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              href="/CV/Sa Takib.pdf"
              className="cv  sm:px-7 py-2.5 text-3xl md:text-4xl"
              download
            >
              <div className=" px-2 md:px-0  flex  items-center  sm:gap-2">
                <p>CV</p>{" "}
                <img
                  src={Download}
                  alt=""
                  className=" hidden sm:block  w-9 invert "
                />
              </div>
            </motion.a>
            <motion.a
              initial="hidden"
              variants={container(0.4)}
              whileInView="show"
              viewport={{ once: true }}
              href="https://www.linkedin.com/in/sa-takib/"
              className=" relative rounded-[100%]  text-4xl px-[1.05rem] py-[0.7rem] ">
              <FontAwesomeIcon href="#" icon={faLinkedin} />
            </motion.a>
            <motion.a
              initial="hidden"
              variants={container(0.6)}
              whileInView="show"
              viewport={{ once: true }}
              href="https://github.com/Takib-Ahmed"
              className=" relative rounded-[100%]  text-4xl px-[1.05rem] py-[0.7rem] "
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
            <motion.a
              initial="hidden"
              variants={container(0.8)}
              whileInView="show"
              viewport={{ once: true }}
              href="https://www.youtube.com/@EasyCodingDev"
              className=" relative rounded-[100%]  text-4xl px-[0.85rem] py-[0.7rem]"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </motion.a>
            <motion.a
              initial="hidden"
              variants={container(1)}
              whileInView="show"
              viewport={{ once: true }}
              href="https://wa.me/01615081141"
              className=" relative rounded-[100%]  text-4xl px-[1.05rem] py-[0.7rem]"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </motion.a>
          </div>
        </div>

        <div className=" avatar text-right   ">
          <div className="card   mb-0 md:my-0 inline-flex flex-col  h-[20rem] mt-8 sm:mt-0 sm:h-[100%]">
            <img
              src="https://res.cloudinary.com/duxbdw0bn/image/upload/v1747249540/profile_copy_ek7tik.png"
              alt=""
              className=" profile"
            />
            <div className="info gap-2 sm:gap-3 md:gap-4  lg:gap-5 text-[0.7em] sm:text-xs   md:text-sm lg:text-[1em]">
              <div>Front tend developer</div>
              <div>Bangladeshi</div>
              <div>3/12</div>
              <div>Male</div>
            </div>
          </div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={
          showFloatingIcons ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
        }
        transition={{ duration: 0.5 }}
        className="  fc-container fixed -right-2.5  top-0  h-full  flex justify-end items-end lg:justify-center lg:items-center  z-50 "
      >
        <div
          className={`fixedcontracts   contractlinks    translate-y-7 lg:translate-y-0  md:bottom-5 lg:bottom-0 ${
            isactive && "hovered    -z-50 lg:mb-0 "
          }    lg:mt-32   p-4 lg:p-1   lg:py-20  flex flex-col  justify-start  lg:justify-center gap-5 sm:gap-10    w-max  items-center   `}
          onMouseEnter={() => {
            setisactive(true);
          }}
          onMouseLeave={() => {
            setisactive(false);
          }}
        >
          {/* <div className=" absolute -z-20     -translate-x-8 w-[115%] h-[80%] bg-[#010824] border-purple-500 border-l inset-0  rounded-l-[3.5rem]  ">

          </div>
             <div className=" absolute -z-20   -translate-x-2   w-[110%] h-full  left-0 bg-[#010824]  inset-0    ">

          </div> */}
          {/* <a href="/CV/Sa Takib.pdf" className='cv hidden hover:text-black  text-[20px] px-2 py-[0.45rem] rounded-full' download  ><div className=' grid  items-center  sm:gap-2'><p>CV</p> <img src={Download} alt="" className=' hidden   invert ' /></div></a> */}

          {contractlinks.map((links, key) => (
            <motion.a
              key={key}
              href={links.url}
              dragDirectionLock
              drag
              dragConstraints={{
                left: 0,
                right: 0,
                top: -500,
                bottom: 0,
              }}
              className={` absolute  cursor-pointer  z-[99999999999999]  -translate-y-full bottom-6 md:bottom-0  right-5  lg:relative rounded-[100%]  px-2 py-[0.45rem] text-2xl lg:text-3xl flex justify-center items-center  ${
                links.icon && "hover:text-[#010824]  "
              } `}
            >
              {links.fonticon ? (
                <FontAwesomeIcon icon={links.fonticon} />
              ) : (
                <motion.div
                  whileTap={{
                    scale: 1.1,
                  }}
                >
                  <links.icon
                    onClick={() => {
                      setisactive(!isactive);
                    }}
                  />
                </motion.div>
              )}
            </motion.a>
          ))}
        </div>
        {/* <div className=" absolute   hidden -z-10  w-full -translate-x-2.5     h-full bg-[#010824] border-purple-500 border-l inset-0  ">

          </div>  */}
      </motion.div>
    </div>
  );
};

export default Home;

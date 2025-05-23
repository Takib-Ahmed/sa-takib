import { motion } from "framer-motion";
import { Reveal } from "./ui/Reavel";

export function Contract() {
  const listcontracts = [
    {
      title: "Phone Number",
      value: "01615081141",
    },
    {
      title: "Email",
      value: "satakib300@gmail.com",
    },
    {
      title: "Youtube",
      value: "@easycodingdev",
    },
  ];
  return (
    <div className=" flex justify-center items-center">
      <div
        className="contracts relative overflow-y-hidden contract w-fit   "
        id="contracts"
      >
        <div className="title text-[1.5em] md:text-[2.5em] lg:text-[5em]">
          <h1 className="Hidden2 "> This is my Contracts</h1>
        </div>
        <div className="des text-wrap  mx-5 Hidden2">
          Ensure transparency, professionalism, and a smooth working process for
          every project.
        </div>
        <div className="contractcontainer flex flex-wrap justify-center  flex-col-reverse lg:flex-row  lg:flex-nowrap lg:justify-between lg:gap-52 p-5 pb-0 contract">
          <div className="inputs grid gap-4  pb-0 lg:ms-[-5vw] mt-24 sm:mt-10  md:mt-32 lg:mt-0 ">
            <form action="" name="contractus ">
              <div className="name">
                <h4 className="title ">Name</h4>
                <br />
                <input
                  type="name"
                  required
                  placeholder="Name"
                  className="nameinput input  rounded-[30px] contract  w-[70vw]  lg:w-[30vw] "
                />
              </div>
              <div className="email">
                <motion.h4     variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="title ">email</motion.h4>
                <br />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="emailinput  input contract w-[70vw]  lg:w-[30vw] "
                />
              </div>
              <div className="message relative  ">
                <motion.h4     variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }} className="title ">message</motion.h4>
                <br />
                <textarea
                  type="text"
                  name="text"
                  placeholder="message"
                  className="messageinput  input min-h-[40vw] lg:min-h-[16vw] w-[80vw]  lg:w-[30vw] placeholder:text-center  placeholder:translate-y-[11vw] md:placeholder:translate-y-[17vw] lg:placeholder:translate-y-[6vw]  left-[0px] mt-1  contract"
                />
              </div>
              <br />
              <div className="send  button">
                <button
                  className=" bg-pink-700 w-[80vw]    lg:w-[30vw] rounded-[25px] p-2 py-3 contract "
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="list contract grid   ms-0  lg:mx-24 mt-5 lg:mt-[150px] ">
            {listcontracts.map((value, key) => (
              <div className="item" key={key}>
                <br className=" lg:hidden" />
                <motion.h3
                
                    variants={{
                hidden: {
                  opacity: 0,
                  y:  15,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
                className=" ">{value.title}</motion.h3>
                <br className=" lg:hidden" />
        <div className=" flex justify-center">
                 <Reveal className=" bg-10f4f4 " Slider={true}>
                 <div className="details ">{value.value}</div>
               </Reveal>
        </div>
              </div>
            ))}
          </div>
        </div>
        {/* <section className="wrapper overflow-y-hidden w-full left-0 m-0 p-0  contract ">
        <div id="stars"  className="w-full left-0 rotate-180 reverse"></div>
        <div id="stars2" className="w-full left-0 rotate-180 reverse"></div>
        <div id="stars3" className="w-full left-0 rotate-180 reverse"></div>
   
    </section> */}
      </div>
    </div>
  );
}
import React, { JSX, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";


interface Props {
  children: JSX.Element;
  width?: string;
  Slider:boolean;
  dimention:'-y'|'y'| false;
  className:string;
}


export const Reveal = ({ children, width = "fit-content" ,Slider,dimention,className}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref,{ once:true});
  const controls = useAnimation();
  const slideControls = useAnimation();

  useEffect(()=>{

console.log(isInView)

  })

  useEffect(() => {
    if (isInView) {
controls.start('visible')
slideControls.start('visible')

    } 
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
      }}
    >
 { dimention ?
  
  dimention === 'y' ?      <motion.div
  className=" text-center   origin-center  "
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>:     <motion.div
      className=" text-center  overflow-hidden"
        initial="hidden"
        animate={controls}

        variants={{
          hidden: { opacity: 0, y: -75 ,x:0},
          visible: { opacity: 1, y: 0,x:0 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>:
       <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>


 }
   {
    Slider && <motion.div
className={className}
  variants={{
    hidden: { left: 0 },
    visible: { left: "100%" },
  }}
  initial="hidden"
  animate={slideControls}
  transition={{ duration: 0.5, ease: "easeIn" }}
  style={{
    position: "absolute",
    top: 0,
    bottom: 0,
    left:0,
    right: 0,
  
    zIndex: 20,

  }}
/>
   }
    </div>
  );
};

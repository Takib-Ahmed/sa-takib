/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function  RectProgresss({screenSize,value,Revealed,KEY}){

  const [progress, setProgress] = useState(0);

    useEffect(() => {
    
      const time = KEY+1 * 20
      
      const isRevealed = Revealed.some((reveal) => KEY!=0 ?reveal.contains(KEY) && reveal.contains("Reveal"): true);
      const timeout = isRevealed && setTimeout(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= value.skill) return value.skill; // যদি সর্বোচ্চ মানে পৌঁছে যায়, তাহলে থামাও
            
            // Revealed-এ `KEY` এবং `Reveal` ক্লাস আছে কিনা চেক করো

            return isRevealed &&  value.skill>=prev ? prev + 0.5 : value.skill; // যদি KEY থাকে, তাহলে বাড়াও
          });
        }, 10);
    
        // ইন্টারভ্যাল বন্ধ করার জন্য ক্লিনআপ ফাংশন
        return () => clearInterval(interval);
      },  time);
    
      return () => clearTimeout(timeout);
    }, [value.skill, Revealed, KEY]);
    // progress ডিপেন্ডেন্সি থেকে সরিয়ে দিলা
    return (
       <svg 
         fill="transparent"
         id="svg" 
         viewBox={screenSize>520 ?"0 0 110 117" :"0 0 95 110"}
        
         xmlns="http://www.w3.org/2000/svg" 
         className="w-full h-full   rounded-[10%]    top-0 absolute left-0 SVG    "
         
       >
         {/* Background Rectangle */}
         <rect 
          
           fill="transparent" 
          height='100%'
          width='100%'
           strokeWidth="3" 
           
           rx="10" 
           ry="10"
           className="rect2 "
       
          
         ></rect>
       
         {/* Animated Stroke Rectangle */}
         <rect 
       
             strokeWidth="3"
           height='100%'
          width='100%'
           rx="10" 
           ry="10"
           style={{strokeDashoffset:440 * progress*0.01,stroke:value.color}}
         className="rect2  transition-all duration-300 "
         ></rect>
       </svg> 
    );
}
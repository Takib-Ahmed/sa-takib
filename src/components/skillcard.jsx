/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RectProgresss from "./Reactprogress";
import Vscode from "./svgs/vscode";
import { useEffect, useState } from "react";

export default function SkillCard({value,KEY,screenSize,Revealed,itemRefs}){
    const [progress, setProgress] = useState(0);

      useEffect(() => {
        
          const time = KEY * 30
          const progressTime =   progress  + 25
          const isRevealed = Revealed.some((reveal) => KEY!=0 ?reveal.contains(KEY) && reveal.contains("Reveal"): true);
          const timeout = isRevealed && setTimeout(() => {
            const interval = setInterval(() => {
              setProgress((prev) => {
                if (prev >= value.skill) return value.skill; // যদি সর্বোচ্চ মানে পৌঁছে যায়, তাহলে থামাও
                
                // Revealed-এ `KEY` এবং `Reveal` ক্লাস আছে কিনা চেক করো
    
                return isRevealed &&  value.skill>=prev ? prev + 1 : value.skill; // যদি KEY থাকে, তাহলে বাড়াও
              });
            }, progressTime);
        
            // ইন্টারভ্যাল বন্ধ করার জন্য ক্লিনআপ ফাংশন
            return () => clearInterval(interval);
          },  time);
        
          return () => clearTimeout(timeout);
        }, [value.skill, Revealed, KEY,progress]);
    return (
        <div
           

        style={screenSize>425 ? { transitionDelay: `${(KEY * 100)}ms` } : { transitionDelay: `${(KEY * 50)}ms` }}
          key={KEY}
          ref={(el) => (itemRefs.current[KEY] = el)} // Assign refs to each item
          className={`item  ${KEY}  shadow-slate-400 shadow-2xl relative  Hidden items-center justify-center ${value.name === 'Bootstrap' && screenSize<435  ? ' hidden':""}`} // Default class is Hidden
        >


<RectProgresss KEY={KEY}  Revealed={Revealed} screenSize={screenSize} value={value}/>


{value.icon ? 
(value.name === 'HTMLs' ? 
<FontAwesomeIcon icon={value.icon}    style={{ color: value.color , fontSize:screenSize>=768? '95px':'45px'}} /> 
: <value.icon 

  className={`shadow  items-center  `} 
  style={{ color: value.color }} 
  size={screenSize>=768? value.size:40} 
  
/> 
) 
: <><Vscode  size={screenSize>=768? 85:35}/><div className="h-" ></div></>
}

   
          <h3 className="  text-[0.5rem]  sm:text-xs text-wrap  md:text-sm lg:text-base">{value.name}</h3> 
        <h2 className={` text-[0.5rem]   sm:text-xs text-wrap  md:text-sm lg:text-base text-[#152256]  translate-y-0.5 sm:translate-y-1  invert font-semibold`} >{progress+'%'}</h2>
        </div>
    );
}
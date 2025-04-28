/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RectProgresss from "./Reactprogress";
import Vscode from "./svgs/vscode";
import { useEffect, useState } from "react";

export default function SkillCard({value,KEY,screenSize,Revealed,itemRefs}){
    const [progress, setProgress] = useState(value.skill);


    return (
        <div
           

        style={screenSize>425 ? { transitionDelay: `${(KEY * 90)}ms` } : { transitionDelay: `${(KEY * 40)}ms` }}
          key={KEY}
          ref={(el) => (itemRefs.current[KEY] = el)} // Assign refs to each item
          className={`item  ${KEY} bg-[#00092b] shadow-slate-400 shadow-2xl relative  Hidden items-center justify-center ${value.name === 'Bootstrap' && screenSize<420 ? ' hidden':""}`} // Default class is Hidden
        >


<RectProgresss KEY={KEY}  Revealed={Revealed} screenSize={screenSize} value={value}/>


{value.icon ? 
(value.name === 'HTMLs' ? 
<FontAwesomeIcon icon={value.icon}    style={{ color: value.color , fontSize:screenSize>=865? '95px':'45px'}} /> 
: <value.icon 

  className={`shadow  items-center  `} 
  style={{ color: value.color }} 
  size={screenSize>=865? value.size:40} 
  
/> 
) 
: <><Vscode  size={screenSize>=865? 85:35}/><div className="h-" ></div></>
}

   
          <h3 className="  text-[0.5rem]  sm:text-xs text-wrap  md:text-sm lg:text-base">{value.name}</h3> 
        <h2 className={` text-[0.5rem]   sm:text-xs text-wrap  md:text-sm lg:text-base text-[#152256]  translate-y-0.5 sm:translate-y-1  invert font-semibold`} >{progress+'%'}</h2>
        </div>
    );
}
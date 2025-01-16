import { useState } from "react"

export function Dynamicstyle(){
    const [isactive,setisactive] =useState(true);
    const Style = {
        backgroundColor : isactive ? "green":"red"
        
    }
return<>





<button className="btn b" style={Style} onClick={()=>{

    setisactive(!isactive)
}}>


{
    isactive ? "Activ":"Inactive"

}

</button>


</>
}
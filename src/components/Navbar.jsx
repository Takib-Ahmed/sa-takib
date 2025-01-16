
import { useState } from "react"
import logo from "../assets/logo_prev_ui.png"
export function Navbar ({view})
{
    const [listnav] = useState(['home','skills','projects','contracts'])
// const addclass((target)=>{
   
// })

    return<>
    
 <header className="  ">
    <div className="logo"><img src={logo} alt="" /></div>
    <nav>
     
        {
            listnav.map((value,key)=>(
                <a key={key} className="inactive" href={'#'+value} id={view==='list' ? value+'link' : value+'links'}>{value}</a>
         
            ))
        }
      
           
               
    </nav>

 </header>
    
    </>
}
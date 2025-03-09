

import logo from "../assets/logo_prev_ui.png"
export function Navbar ({view})
{
    const listnav = ['home','skills','projects','contracts']


    return<>
    
 <header className="  ">
    <div className="logo "><img src={logo} alt=""  className="w-10 sm:w-20"/></div>
    <nav className=" text-xs sm:text-base gap-5 sm:gap-16">
     
        {
            listnav.map((value,key)=>(
                <a key={key} className="inactive" href={'#'+value} id={view==='list' ? value+'link' : value+'links'}>{value}</a>
         
            ))
        }
      
           
               
    </nav>

 </header>
    
    </>
}
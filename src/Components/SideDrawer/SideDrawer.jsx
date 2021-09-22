import React from "react";

import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'sideDrawer'
    if(props.show){
        drawerClasses = 'sideDrawer open'
    }
   return (
       <nav className={drawerClasses}>
           <ul>
               <li><a href="#profile">Profile</a></li>
               <li><a href="#experience">Experience</a></li>
               <li><a href="#abilities">Abilities</a></li>
               <li><a href="#github">Github Projects</a></li>
               <li><a href="#contact">Contact me!</a></li>
           </ul>
       </nav>
   )
}

export default SideDrawer;
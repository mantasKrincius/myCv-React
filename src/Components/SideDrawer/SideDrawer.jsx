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
               <li><a href="/">Profile</a></li>
               <li><a href="/">Experience</a></li>
               <li><a href="/">Abilities</a></li>
               <li><a href="/">Github Projects</a></li>
           </ul>
       </nav>
   )
}

export default SideDrawer;
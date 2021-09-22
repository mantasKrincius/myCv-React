import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

import './Nav.css'



const NavBar = props => {
    return (
        <header className="navBar">
            <nav className="navBarNavigation">
                <div className="navBarToggleButton">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="spacer"/>
                <div className="navBarNavigationItem">
                    <ul className="main-navigation">
                        <li><a href="#profile">Profile</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#abilities">Abilities</a></li>
                        <li><a href="#github">Github Projects</a></li>
                        <li><a href="#contact">Message me!</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
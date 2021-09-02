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
                <div className="navBarLogo"><a href="/">Logo</a></div>
                <div className="spacer"/>
                <div className="navBarNavigationItem">
                    <ul className="main-navigation">
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Profile</a></li>
                        <li><a href="/">Profile</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;
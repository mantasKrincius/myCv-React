import './App.css';
import NavBar from "./Components/Navigation/NavBar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import BackDrop from "./Components/BackDrop/BackDrop";
import {useState} from "react";
import Hero from "./Components/Hero/Hero";
import Profile from "./Components/Profile/Profile";
import Experiences from "./Components/Experiences/Experiences";
import Contact from "./Components/Contact/Contact";

function App() {
    const [toggle, setToggle] = useState(false)

    let backDrop
    if (toggle) {
        backDrop = <BackDrop click = {backDropHandler}/>
    }

    function drawerToggleClickHandler() {
        setToggle(prevState => ({
            ...prevState,
            toggle: !toggle
        }))
    }
    function backDropHandler() {
        setToggle(false)
    }

    return (
        <div style={{height: "100%"}}>
            <NavBar drawerClickHandler = {drawerToggleClickHandler}/>
            <SideDrawer show = {toggle}/>
            {backDrop}

            <main style={{marginTop: "55px"}}>
                <Hero/>
                <div className="container">
                    <div>
                        <Profile/>
                        <Experiences/>
                        <Contact/>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default App;

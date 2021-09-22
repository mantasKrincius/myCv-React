import './App.css';
import NavBar from "./Components/Navigation/NavBar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import BackDrop from "./Components/BackDrop/BackDrop";
import {useState} from "react";
import Hero from "./Components/Hero/Hero";
import Profile from "./Components/Profile/Profile";
import Experiences from "./Components/Experiences/Experiences";
import Contact from "./Components/Contact/Contact";
import GithubSection from "./Components/GitHub/GithubSection";

function App() {
    const [toggle, setToggle] = useState(false)

    let backDrop
    if (toggle) {
        backDrop = <BackDrop click={backDropHandler}/>
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
        <div style={{height: "100%", padding: "0 15px"}}>
            <NavBar drawerClickHandler={drawerToggleClickHandler}/>
            <SideDrawer show={toggle}/>
            {backDrop}

            <main style={{marginTop: "55px"}}>
                <Hero/>
                <div className="container">
                    <div>
                        <section id="profile">
                            <Profile/>
                        </section>
                        <section id="experience">
                            <Experiences/>
                        </section>
                        <section id="github">
                            <GithubSection/>
                        </section>
                        <section id="contact">
                            <Contact/>
                        </section>


                    </div>

                </div>
            </main>
        </div>
    );
}

export default App;

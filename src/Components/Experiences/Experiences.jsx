import React from "react";
import './Experience.css'


export default function Experiences() {
    return (
        <div>
            <div>
                <h2>Experiences</h2>
                <p>
                    “Protons give an atom its identity, electrons its personality.”
                    - Bill Bryson, A short history of nearly everything
                </p>
            </div>
            <hr style={{color: "red"}}/>
            <div>
                <h3>Education</h3>
                <div className="exp-education-main-div exp-education-bg1">
                    <div className="wrapper">
                        <h4>Code Academy</h4>
                        <h5>Front end advanced</h5>
                        <h5>2021</h5>
                    </div>
                    <div className="wrapper">
                        <div>HTML 60h
                            <ul>
                                <li>Deep HTML nesting</li>
                                <li>Responsive design</li>
                                <li>CSS animations</li>
                            </ul>
                        </div>
                        <p>JavaScript 120h</p>
                        <div>Node.js 60h
                            <ul>
                                <li>Express</li>
                                <li>Mongoose database</li>
                            </ul>
                        </div>
                        <p>React</p>
                        <p>Vue.js</p>

                    </div>
                </div>
                <div className="exp-education-main-div exp-education-bg2">
                    <div className="wrapper">
                        <h4>Vilnius Coding School</h4>
                        <h5>Fullstack</h5>
                        <h5>2020</h5>
                    </div>
                    <div className="wrapper">
                        <p>Full acquaintance with websites, structures. Programming languages like javascript, php.
                            Working with mysql database (phpmyadmin). HTML, CSS, CEO features.</p>
                    </div>
                </div>
                <div className="exp-education-main-div exp-education-bg3">
                    <div className="wrapper">
                        <h4>Zemaitijos college</h4>
                        <h5>Business Information systems</h5>
                        <h5>2006 - 2009</h5>
                    </div>
                    <div className="wrapper">
                        <p>Visual DataBase, MS Visual Basic, IT architecture, computer networks and many more... That
                            was looong time ago.</p>
                    </div>
                </div>
            </div>

            <div>
                <h2>Abilities</h2>
                <p>“Life without knowledge is death in disguise.”
                    - Talib Kweli</p>
            </div>
            <hr style={{color: "blue"}}/>
            <div>
                <div>
                    <h3>Soft Skills</h3>
                    <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center",}}>
                        <div>
                            <p>Perseverance</p>
                            <p>Career pursuit</p>
                            <p>The desire to improve as a personality</p>
                            <p>Loyalty</p>
                            <p>The desire to always learn</p>
                        </div>
                        <div>
                            <p>Innovation</p>
                            <p>Team member</p>
                            <p>Problem-solving</p>
                            <p>Communication skills</p>
                            <p>The ability to work well under pressure</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3>Hard Skills</h3>
                    <div style={{display: "flex", justifyContent: "space-around", alignItems: "center",}}>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>React/redux </p>
                        <p>Vue.js/vuex</p>
                        <p>Node.js</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Languages</h3>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <p>English</p>
                    <p>Lithuania</p>
                </div>
            </div>
        </div>
    )
}
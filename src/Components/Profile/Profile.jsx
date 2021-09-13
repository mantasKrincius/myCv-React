import React from "react";
import profilePic from '../../assets/profilePic.jpg'
import './Profile.css'

export default function Profile() {
    return (

        <div style={{backgroundColor: "#f4f0ec"}}>
            <div style={{display: "flex", justifyContent: "center", flexDirection:"column", alignItems: "center"}}>
                <p>Profile</p>
                <p>I'm a creative Front End web-developer</p>
            </div>
            <hr/>
            <div style={{display: "flex", justifyContent: "center",flexWrap: "wrap", textAlign: "center"}}>
                <div>
                    <h2>About me</h2>
                    <div style={{display: "flex", justifyContent: "center", maxWidth: "410px"}}>
                        <p>I spent almost 10 years in Birmingham, England. Where I learned a lot of valuable life lessons and language, I understood what I wanted out of life and how to achieve it. I’ve been trying to achieve this lately. I started from Pyhthon but it wasnt what i wanted at that time, so I completed a full stack developer course at Vilnius Coding School (I got acquainted with html, css, javascript, php, seo). Then a long udemy marathon. And now I’m studying at the Coding Academy Front End Advanced Course. Which delves into JavaScript, Node.js, react, vue.js and of course html / css.
                            There is a long way to go, but I never give up and go to the end :)
                            If you need a front end junior programmer, I am at your service!</p>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "50px"}}>
                    <img style={{borderRadius: "50%", maxWidth: "300px", maxHeight: "300px"}} src={profilePic}/>
                </div>
                <div style={{display: "flex", justifyContent: "center", maxWidth: "400px", flexDirection: "column"}}>

                    <div>
                        <h5>Name:</h5>
                        <p>Mantas</p>
                        <h5>Age:</h5>
                        <p>33y</p>
                        <h5>Location:</h5>
                        <p>Siauliai, Lithuania</p>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-github"></i>
                    </div>

                </div>
            </div>
        </div>
    )
}
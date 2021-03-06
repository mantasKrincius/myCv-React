import React from "react";
import profilePic from '../../assets/profilePic.jpg'
import './Profile.css'

export default function Profile() {
    return (

        <div style={{backgroundColor: "#f4f0ec"}}>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <p>I'm a creative Front End web-developer</p>
            </div>
            <hr/>
            <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap", textAlign: "center"}}>
                <div>
                    <h2>About me</h2>
                    <div style={{display: "flex", justifyContent: "center", maxWidth: "410px"}}>
                        <p>I spent almost 10 years in Birmingham, England.
                            Where I learned a lot of valuable life lessons, advanced my English and figured out what I
                            wanted out of life and how to achieve it. Lately I have been focusing my efforts on how to
                            reach this goal. I've been trying to achieve this lately. I started from Python but it
                            wasn't what I wanted at that time, so I completed a full stack developer course at Vilnius
                            Coding School (I got acquainted with html, css, javascript, php, seo). After that a long
                            Udemy (https://www.udemy.com) marathon and lastly Coding Academy Front End Advanced
                            Course.Which delves into JavaScript, Node.js, react, vue.js and of course html / css.
                            There is a long way to go, but I never give up and go to the end :)
                            There is a long road ahead , however, I never give up and go to the end 🙂 If you need a
                            front end junior programmer in the office or remote, I am at your service!
                        </p>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "50px"}}>
                    <img className="image" style={{borderRadius: "50%", maxWidth: "300px", maxHeight: "300px"}}
                         src={profilePic}/>
                </div>
                <div style={{display: "flex", justifyContent: "center", maxWidth: "400px", flexDirection: "column"}}>

                    <div>
                        <h3><i className="fas fa-user-alt"></i>Mantas Krincius</h3>
                        <h3><a href="tel:+37060711595"><i className="fas fa-phone"></i>+370 607 11595</a></h3>
                        <h3><a href="mailto:mantaskrincius@gmail.com"><i className="far fa-envelope"></i>mantaskrincius@gmail.com</a>
                        </h3>
                        <h3><i className="fas fa-map-marker-alt"></i>Siaulai, Lithuania</h3>
                        <div className="social-media">
                            <a className="btn" href="https://www.facebook.com/mantas.krinciuszoo">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a className="btn" href="https://linkedin.com/in/mantas-krincius">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a className="btn" href="https://github.com/mantasKrincius">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
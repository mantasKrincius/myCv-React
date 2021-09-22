import React from "react";
import ContactForm from "./ContactForm";
import './Contact.css'
import '../Profile/Profile.css'
export default function Contact() {
    return (
        <div style={{backgroundColor: "gray", padding: "10px"}}>
            <h2>Contact</h2>
            <p>If I had asked people what they wanted, they would have said faster horses. ”
                - Henry Ford </p>
            <div>
                <hr/>
                <div className="contact-social-icons">
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
                <ContactForm/>
                <hr/>
            </div>
        </div>
    )
}
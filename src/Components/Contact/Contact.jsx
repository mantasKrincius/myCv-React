import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div style={{backgroundColor: "gray"}}>
            <h2>Contact</h2>
            <p>If I had asked people what they wanted, they would have said faster horses. ”
                - Henry Ford </p>
            <div>
                <hr/>
                <div>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-github"></i>
                </div>
                <ContactForm/>
                <hr/>
            </div>
        </div>
    )
}
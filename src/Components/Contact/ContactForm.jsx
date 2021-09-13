import React from "react";
import emailjs from 'emailjs-com'
import './ContactForm.css'

export default function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_jwgh9t7', 'template_ne195wq', e.target, 'user_Bl0nvkYscjMLBfzE1UygG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div className="main-form-div">
                <form className="form d-flex"
                      style={{display: "flex", flexDirection: "column", width: "300px"}} onSubmit={sendEmail}>
                    <label> Name </label>
                    <input type="text" name="name" placeholder="Enter Your name" required/>
                    <label> Subject </label>
                    <input type="text" name="subject" placeholder="Subject" required/>
                    <label> Enter your email</label>
                    <input type="email" className="form-control" name="email"
                           placeholder="Enter Your email" required/>
                    <label>Your Message</label>
                    <textarea className="form-control" name="message" placeholder="Your message"
                              rows="4" cols="50" required></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}
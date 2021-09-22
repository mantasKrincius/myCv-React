import React from "react";
import emailjs from 'emailjs-com'
import './ContactForm.css'
import CV from '../../assets/Mantas Krincius.pdf'

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
                <form className="contact-form" onSubmit={sendEmail}>
                    <label> Name </label>
                    <input type="text" name="name" placeholder="Enter Your name" required/>
                    <label> Subject </label>
                    <input type="text" name="subject" placeholder="Enter subject" required/>
                    <label> Enter your email</label>
                    <input type="email" name="email" placeholder="Enter Your email" required/>
                    <label>Your Message</label>
                    <textarea className="form-control" name="message" placeholder="Leave Your message"
                              rows="4" cols="50" required></textarea>
                    <div className="form-button">
                        <button>Send</button>
                    </div>
                </form>
                <div className="contact-form-info">
                    <h3><i className="fas fa-user-alt"></i>Mantas Krincius</h3>
                    <h3><a href="tel:+37060711595"><i className="fas fa-phone"></i>+370 607 11595</a></h3>
                    <h3><a href="mailto:mantaskrincius@gmail.com"><i className="far fa-envelope"></i>mantaskrincius@gmail.com</a></h3>
                    <h3><i className="fas fa-map-marker-alt"></i>Siaulai, Lithuania</h3>
                    <button>  <a href={CV} download="Mantas Krincius CV">Download my CV</a></button>
                </div>
            </div>

        </div>
    )
}
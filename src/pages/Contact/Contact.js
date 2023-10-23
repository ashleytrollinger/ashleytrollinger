import React, { useEffect, useRef } from 'react';
import github from '../../images/github.png';
import linked from '../../images/linked.png';

import './Contact.css';
function Contact() {
    const observer = useRef(
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showD');
                } else {
                    entry.target.classList.remove('showD');
                }
            });
        })
    );

    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hiddenD');
        hiddenElements.forEach((el) => observer.current.observe(el));
        return () => {
            hiddenElements.forEach((el) => observer.current.unobserve(el));
        };
    }, []);
    return (
        <section className='contact-section hiddenD'>
            <div>
                <h2>Contact Me</h2>
            </div>
            <div>
                <p>Feel free to reach out through the form below or via any of the socials linked ☺</p>
                <div className='contact-class'>
                    <form
                        id="contactform"
                        action="https://formsubmit.io/send/ashley@trollingers.com"
                        method="POST"
                    >
                        <input name="name" type="text" placeholder="Your Name" required />
                        <input name="email" type="email" placeholder="Your Email" required />
                        <textarea name="comment" placeholder="Your Message" rows="3" required></textarea>

                        <input value="Submit" type="submit" />
                    </form>
                    <div className='icons'>
                        <a href='https://github.com/ashleytrollinger' target="_blank" rel="noopener noreferrer">
                            <img src={github} alt='github icon'></img></a>
                        <a href='https://www.linkedin.com/in/ashley-trollinger-a3276826a/' target="_blank" rel="noopener noreferrer">
                            <img src={linked} alt='github icon'></img>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
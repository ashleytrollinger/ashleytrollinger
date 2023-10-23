import React, { useEffect, useRef } from 'react';
import Rezi from '../../images/OfficialResume.pdf';
import Certification from '../../images/Certification.pdf';

import './Resume.css';
function Resume() {

    const observer = useRef(
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        })
    );

    useEffect(() => {
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.current.observe(el));
        return () => {
            hiddenElements.forEach((el) => observer.current.unobserve(el));
        };
    }, []);
    return (
        <>

            <section className='resume-section'>
                <div className='hidden'>
                    <h2>My Resumé</h2>
                </div>
                <div className='link-to hidden'>
                    <a href={Rezi} download>
                        <h3><span>Download my Resume</span></h3>
                    </a>
                </div>
                <div className='certification hidden'>
                    <a href={Certification} target="_blank" rel="noopener noreferrer">
                        <h5>Full-Stack Certification</h5>
                    </a>
                    <p>A 24-week intensive program focused on gaining skills in both front-end and back-end web development.</p>
                </div>
                <div className='skills'>
                    <div className='arrow-container hidden'>
                        <h5>Front-End Proficiencies</h5>
                        <ol>
                            <li>HTML5 ★★★</li>
                            <li>CSS3 ★★★</li>
                            <li>JavaScript ★★★</li>
                            <li>jQuery ★★★</li>
                            <li>Bootstrap ★★☆</li>
                            <li>React ★★★</li>
                            <li>Responsive Design ★★☆</li>
                            <li>Tailwind ★★★</li>
                            <li>Bootstrap ★★☆</li>
                        </ol>
                    </div>
                    <div className='arrow-container hidden'>
                        <h5>Back-End Proficiencies</h5>
                        <ol>
                            <li>APIs ★★★</li>
                            <li>MySQL ★★★</li>
                            <li>Sequelize ★★★</li>
                            <li>NoSQL ★★☆</li>
                            <li>SQLite ★★★</li>
                            <li>MongoDB ★★★</li>
                            <li>NodeJS ★★★</li>
                            <li>Express ★★★</li>

                        </ol>
                    </div>
                    <div className='arrow-container hidden'>
                        <h5>Other Proficiencies</h5>
                        <ol>
                            <li>npm ★★★</li>
                            <li>version control/Git ★★★</li>
                            <li>Model View Controller (MVC) ★★☆</li>
                            <li>Progressive Web Applications ★★☆</li>
                            <li>Figma ★☆☆</li>
                            <li>Microsoft Office ★★★</li>
                        </ol>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume;
import React, { useState, useEffect, useRef } from 'react';
import Rezi from '../../images/OfficialResume.pdf';
import Certification from '../../images/Certification.pdf';

import './Resume.css';
const projects = [
    {
        name: 'Password Generator',
        description: 'JavaScript application that creates unique password combinations based on the users requirements.',
        repo: 'https://github.com/ashleytrollinger/E-Commerce',
        skills: ['JavaScript', 'HTML', 'git']
    },
    {
        name: 'E-Commerce',
        description: 'Backend for an E-commerce website that uses Express API and configured with Sequelize to interact with a MySQL database.',
        repo: 'https://github.com/ashleytrollinger/E-Commerce',
        skills: ['JavaScript', 'Sequelize', 'MySQL', 'Node.js', 'Insomnia', 'git']
    },
    {
        name: 'Weather Dashboard',
        description: '5 Day weather forcast by city using OpenWeatherMap API. Functional search bar and history tabs that save previous searches.',
        repo: 'https://github.com/ashleytrollinger/Weather-Dashboard',
        skills: ['HTML', 'CSS', 'JavaScript', 'API', 'git']
    },
    {
        name: 'Quiz Game',
        description: 'Multiple choice quiz game where users can save their highscores.',
        repo: 'https://github.com/ashleytrollinger/Jersey-Shore-Quiz-Game',
        skills: ['HTML', 'CSS', 'JavaScript', 'API', 'git', ' Responsive Design']
    },
    {
        name: 'SVG Logo Generator',
        description: 'Creates unique SVG logos based on the users requirements and inputs.',
        repo: 'https://github.com/ashleytrollinger/Logo-Maker',
        skills: [ 'JavaScript','inquirer', 'git', 'SVG']
    },
    {
        name: 'React Portfolio',
        description: 'First React project as well as the first draft to my personal portfolio.',
        repo: 'https://github.com/ashleytrollinger/react-portfolio',
        skills: ['React','Bootstrap', 'CSS', 'JavaScript', 'API', 'git', ' Responsive Design']
    },


    // Add more projects as needed
];

function Resume() {
    const [showProjects, setShowProjects] = useState(false);

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

    const toggleProjects = () => {
        setShowProjects(!showProjects);
    };

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
                    <p>A 24-week intensive program focused on gaining skills in both front-end and back-end web development. Taken at The George Washington University Spring of 2023.</p>

                    {/* Dropdown for projects */}
                    <div>
                        <button onClick={toggleProjects} className='gw'>
                            {showProjects ? 'X' : 'See Bootcamp Projects'}
                        </button>
                        {showProjects && (
                            <div className="projects-container">
                                {projects.map((project, index) => (
                                    <div key={index} className="projects-div">
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <div className="link">
                                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                                💻📑 Repo
                                            </a>
                                        </div>
                                        <ul id='skills'>
                                            {project.skills.map((skill, skillIndex) => (
                                                <li className='skillli' key={skillIndex}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
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
                <div className='freelance hidden'>
                    <h5>Freelance Work</h5>

                    <p>I am currently engaged in a freelance project where I am responsible for enhancing the user interface and updating dependency packages for a React-based application. You can track my work or request my services through my upwork account linked in the contact section.</p>
                </div>

            </section>
        </>
    );
}


export default Resume;
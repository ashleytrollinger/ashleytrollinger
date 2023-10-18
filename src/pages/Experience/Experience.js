import React, { useState, useEffect } from 'react';
import './Experience.css';

const projects = [
    {
        name: 'Find My Musician',
        description: 'Quick way for like minded musician with similar interest and ablilies to get together and play music.',
        details: 'Find My Musician is a website dedicated to connecting musicians with other like-minded musicians for collaboration and project assistance. Our platform allows musicians to easily create an account and make posts asking for a helping hand or collaboration from other musicians. Whether you are looking for a guitarist for your band or a vocalist for your newest song our site offers a user-friendly interface to help you find the right fit.',
        repo: 'https://github.com/ashleytrollinger/FindMyMusician',
        link: 'https://find-my-musician.herokuapp.com/',
        skills: ['Full-Stack', 'JavaScript', 'Handlebars', 'Bootstrap', 'Node', 'Express', 'MySQL', 'Sequelize', 'GW Bootcamp']
    },
    {
        name: 'JamSphere',
        description: 'Ultimate platform for discovering new music, giving users the ability to post and share song recommendations from their favorite artists or genres.',
        details: 'JamSphere is a social media platform that revolutionizesmusic sharing. Similar to Instagram, JamSphere allows users to share the songs they are listening to, creating a vibrant community centered around music.Followers can simply click on a post to launch their preferred music streaming platform and enjoy the same track.',
        repo: 'https://github.com/ashleytrollinger/JamSphere',
        link: 'https://jamsphere-ad4807320222.herokuapp.com/',
        skills: ['Full-Stack', 'JavaScript', 'React', 'Apollo', 'GraphQL', 'Tailwind', 'MongoDB', 'Express', 'CSS', 'GW Bootcamp']
    },
    {
        name: 'GirlsGoWild',
        description: 'Online game center tailored to the girls. Play all the classic pre-game games with less thought and more conversation!',
        details: 'Games like Truth or Dare and Would you rather made virtual pulling all the prompts from open source APIs.',
        repo: 'https://github.com/ashleytrollinger/girlsgowild',
        link: 'https://girlsgowild.vercel.app/',
        skills: ['JavaScript', 'React', 'CSS', 'Personal Project', 'Responsive Design', 'API']
    }
    // Add more projects as needed
];

function Experience() {
    const [expandedProject, setExpandedProject] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('showL');
                } else {
                    entry.target.classList.remove('showL');
                }
            });
        });

        const projectDivs = document.querySelectorAll('.hiddenL');
        projectDivs.forEach((div) => observer.observe(div));

        return () => {
            projectDivs.forEach((div) => observer.unobserve(div));
        };
    }, []);

    return (
        <section className='experience-section'>
            <div className='hiddenL'>
                <h2>My Portfolio</h2>
            </div>
            {projects.map((project, index) => (
                <div key={index} className="project-div hiddenL">
                    <h3>{project.name}
                    <div className="links">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer">
                            💻📑Repo
                        </a>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            Visit ➙
                        </a>
                    </div></h3>
                    <hr></hr>
                    <p>{project.description}</p>
                    {expandedProject === index ? (
                        <div>
                            <p>{project.details}</p>
                            <ul id='skills'>
                                {project.skills.map((skill, skillIndex) => (
                                    <li className='skillli' key={skillIndex}>{skill}</li>
                                ))}
                            </ul>
                            <button className='skillbtn' onClick={() => setExpandedProject(null)}>︿</button>
                        </div>
                    ) : (
                        <button className='skillbtn' onClick={() => setExpandedProject(index)}>﹀</button>
                    )}
                </div>
            ))}
        </section>
    );
}

export default Experience;

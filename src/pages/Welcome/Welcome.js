import React, { useRef } from 'react';


import Header from '../../components/Header/Header';
import MiniMe from '../../components/Mini-me/Mini-me';
import Resume from '../Resume/Resume';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import './Welcome.css';

function Home() {

    const experienceRef = useRef(null);
    const resumeRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Header />
            <body>
                <section className='body'>
                    <MiniMe />
                    <div className='intro-p'>
                        <p>I like making <em>interactive</em> and <em>entertaining</em> things through code.</p>
                        <nav>
                            <ul>
                                <li onClick={() => scrollToSection(experienceRef)}>Works</li>
                                <li onClick={() => scrollToSection(resumeRef)}>Resume</li>
                                <li onClick={() => scrollToSection(contactRef)}>Contact</li>
                            </ul>
                        </nav>
                    </div>
                </section>
                <section className='pages'>
                    <section id='experience' ref={experienceRef}>
                        <Experience />
                    </section>
                    <section id='resume' ref={resumeRef}>
                        <Resume />
                    </section>
                    <section id='contact' ref={contactRef}>
                        <Contact />
                    </section>
                </section>
            </body>
        </>
    )
}

export default Home;
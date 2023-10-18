import React from 'react';
import Header from '../../components/Header/Header';
import MiniMe from '../../components/Mini-me/Mini-me';
import Resume from '../Resume/Resume';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';
import './Welcome.css';

function Home() {

    return (
        <>
            <Header />
            <body>
                <section className='body'>
                    <MiniMe />
                    <div className='intro-p'>
                        <p>I like making <em>interactive</em> and <em>entertaining</em> things through code.</p>
                    </div>
                </section>
                <section className='pages'>
                    <section id='experience'>
                        <Experience />
                    </section>
                    <section id='resume'>
                        <Resume />
                    </section>
                    <section id='contact'>
                        <Contact />
                    </section>
                </section>
            </body>
        </>
    )
}

export default Home;
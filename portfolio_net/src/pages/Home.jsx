import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import SkillLists from '../components/SkillLists';
import Works from '../components/Works';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <SkillLists />
                <Works />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default Home;

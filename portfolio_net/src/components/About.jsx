import React from 'react';
import Skills from './Skills';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="about-grid">
                    {/* Coluna da Imagem */}
                    <div className="about-img-wrapper">
                        {/* Substitua o src abaixo pela sua foto real */}
                        <img
                            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                            alt="Portrait"
                            className="about-img"
                        />
                    </div>

                    {/* Coluna de Texto */}
                    <div className="about-text">
                        <h2>Sobre mim</h2>
                        <p>
                            Sou uma designer apaixonada por simplificar o complexo. Com 5 anos de experiência,
                            acredito que o design honesto é aquele que serve ao usuário sem gritar por atenção.
                        </p>
                        <p>
                            Minha abordagem combina pensamento estratégico com uma estética refinada,
                            buscando sempre o equilíbrio entre funcionalidade e beleza. Quando não estou
                            no computador, estou buscando inspiração na arquitetura e na natureza.
                        </p>

                        {/* Skills integradas logo após o texto */}
                        <div style={{ marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Expertise</h3>
                            <Skills />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

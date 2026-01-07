import React from 'react';


const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="about-grid">
                    {/* Coluna da Imagem */}
                    <div className="about-img-wrapper">
                        {/* Substitua o src abaixo pela sua foto real */}
                        <img
                            src="/img/foto_lari.jpg"
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

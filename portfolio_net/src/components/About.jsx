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
                        <h2 style={{ fontWeight: 'bold' }}>Sobre mim</h2>
                        <p>
                            Sou Larissa, designer formada pela UFPE, com foco em UX/UI e no desenvolvimento de produtos digitais centrados no usuário. Tenho interesse por arte, música e cultura, referências que atravessam meu processo criativo e influenciam a forma como penso, analiso e projeto.
                        </p>
                        <p>
                          Sou uma pensadora criativa, guiada por pesquisa, estratégia e curiosidade. Gosto de entender contextos, questionar soluções prontas e transformar problemas complexos em experiências claras, acessíveis e funcionais. Acredito no design como ferramenta de impacto real, capaz de conectar pessoas, produtos e objetivos de negócio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

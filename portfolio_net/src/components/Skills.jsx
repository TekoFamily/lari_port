import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Layout, PenTool, Code, Search, Target, Smartphone } from 'lucide-react';

const skills = [
    {
        icon: <Layout size={42} strokeWidth={1} />,
        title: "UI Design",
        description: "Criação de interfaces visualmente atraentes e amigáveis. Tradução de necessidades do usuário em elementos estéticos e funcionais."
    },
    {
        icon: <Smartphone size={42} strokeWidth={1} />,
        title: "Prototyping",
        description: "Desenvolvimento de protótipos de alta fidelidade para validar fluxos de navegação e interações antes do desenvolvimento final."
    },
    {
        icon: <Code size={42} strokeWidth={1} />,
        title: "Web Dev",
        description: "Implementação de layouts pixel-perfect utilizando tecnologias modernas como React, garantindo performance e acessibilidade."
    },
    {
        icon: <Search size={42} strokeWidth={1} />,
        title: "UX Research",
        description: "Investigação profunda de comportamentos e dores dos usuários para embasar decisões de design com dados reais."
    },
    {
        icon: <Target size={42} strokeWidth={1} />,
        title: "Strategy",
        description: "Planejamento estratégico de produto, alinhando objetivos de negócio com as necessidades reais dos clientes."
    },
    {
        icon: <PenTool size={42} strokeWidth={1} />,
        title: "Art Direction",
        description: "Direção visual para garantir consistência e impacto emocional em todos os pontos de contato da marca."
    }
];

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(2); // Desktop default

    // Responsividade para número de cards
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCards(1);
            } else {
                setVisibleCards(2);
            }
        };

        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            (prev + 1) >= (skills.length - visibleCards + 1) ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? skills.length - visibleCards : prev - 1
        );
    };

    // Auto-play suave "passando aos poucos"
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex, visibleCards]);

    return (
        <section className="section-padding skills-section">
            <div className="container">
                <h2 className="skills-title" style={{ marginBottom: '3rem' }}>Minhas Habilidades</h2>

                <div className="carousel-wrapper">
                    {/* Botão Anterior */}
                    <button onClick={prevSlide} className="carousel-btn prev" aria-label="Previous">
                        <ChevronLeft size={32} />
                    </button>

                    {/* Área visível do carrossel */}
                    <div className="carousel-view">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
                            }}
                        >
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="carousel-slide"
                                    style={{ flex: `0 0 ${100 / visibleCards}%` }}
                                >
                                    <article className="skill-card-dark">
                                        <div className="skill-icon">
                                            {skill.icon}
                                        </div>
                                        <h3 className="skill-title-dark">{skill.title}</h3>
                                        <p className="skill-desc-dark">{skill.description}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botão Próximo */}
                    <button onClick={nextSlide} className="carousel-btn next" aria-label="Next">
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Skills;

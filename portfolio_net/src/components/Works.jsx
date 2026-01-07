import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const works = [
    {
        id: 1,
        title: "Minimalist E-commerce",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 2,
        title: "Architecture Portfolio",
        category: "Development",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 3,
        title: "Financial Dashboard",
        category: "UI/UX",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
        id: 4,
        title: "Travel App",
        category: "Mobile Design",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
];

const Works = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1); // Default to 1 for Works to focus on image

    // Optional: Responsive logic if we want to show more on large screens
    useEffect(() => {
        const handleResize = () => {
            // Mantendo 1 por vez para destaque principal da imagem, ou 2 se preferir grid. 
            // Como é portfólio visual, 1 por vez com cards grandes fica elegante.
            // Se a tela for muito larga (>1200px), talvez 2.
            if (window.innerWidth > 1024) {
                setVisibleCards(2);
            } else {
                setVisibleCards(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            (prev + 1) >= (works.length - visibleCards + 1) ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? works.length - visibleCards : prev - 1
        );
    };

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // 5s for works (more time to see image)
        return () => clearInterval(interval);
    }, [currentIndex, visibleCards]);

    return (
        <section id="works" className="section-padding">
            <div className="container">
                <h2 className="section-title">Trabalhos Selecionados</h2>

                <div className="carousel-wrapper">
                    {/* Botoes de Navegação */}
                    <button onClick={prevSlide} className="carousel-btn prev" aria-label="Previous Project">
                        <ChevronLeft size={32} />
                    </button>

                    <div className="carousel-view">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
                            }}
                        >
                            {works.map((work) => (
                                <div
                                    key={work.id}
                                    className="carousel-slide"
                                    style={{ flex: `0 0 ${100 / visibleCards}%` }}
                                >
                                    <div className="work-item-carousel">
                                        <Link to={`/project/${work.id}`} className="work-thumb-carousel">
                                            <img src={work.image} alt={work.title} />
                                        </Link>
                                        <div className="work-info">
                                            <h3>
                                                <Link to={`/project/${work.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                    {work.title}
                                                </Link>
                                            </h3>
                                            <span className="work-desc">{work.category}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button onClick={nextSlide} className="carousel-btn next" aria-label="Next Project">
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Works;

import React from 'react';

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
    }
];

const Works = () => {
    return (
        <section id="works" className="section-padding">
            <div className="container">
                <h2 className="section-title">Trabalhos Selecionados</h2>

                <div className="works-list">
                    {works.map((work) => (
                        <div key={work.id} className="work-item">
                            <div className="work-thumb">
                                <img src={work.image} alt={work.title} />
                            </div>
                            <div className="work-info">
                                <h3>{work.title}</h3>
                                <span className="work-desc">{work.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Works;

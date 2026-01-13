import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container">
                <div style={{ maxWidth: '600px' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Vamos conversar?</h2>
                    <p className="contact-text">
                        Estou sempre aberta a discutir novos projetos e oportunidades de colaboração.
                        Se você busca um design que comunique com clareza, entre em contato.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:larissabcs.designer@gmail.com" style={{ textDecoration: 'underline' }}>Email</a>
                        <a href="https://www.linkedin.com/in/larissa-bezerra-b58b1a247" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>LinkedIn</a>
                        <a href="https://instagram.com/larixbezerra" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Instagram</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Minimalist E-commerce",
        category: "Web Design",
        client: "Nordic Furniture Co.",
        year: "2023",
        role: "Lead Designer & Developer",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        description: `
      Neste projeto, o desafio foi criar uma experiência de compra online que refletisse a simplicidade e a elegância do mobiliário escandinavo. A marca precisava de uma plataforma que não apenas vendesse produtos, mas contasse uma história de design e funcionalidade.
      
      Minha abordagem focou na redução de ruído visual. Eliminei elementos desnecessários, priorizando imagens de alta qualidade e tipografia legível com amplo espaço em branco. O fluxo de checkout foi simplificado para 3 passos, resultando em um aumento de 25% na conversão comparado à versão anterior.

      Utilizei uma paleta monocromática com toques de madeira natural para evocar a materialidade dos produtos. A interface é totalmente responsiva, garantindo que a beleza do design se mantenha intacta, seja em um desktop de 27 polegadas ou em um smartphone.
    `,
        images: [
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: 2,
        title: "Architecture Portfolio",
        category: "Development",
        client: "Studio Arch",
        year: "2024",
        role: "Frontend Developer",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        description: `
      Para o renomado escritório Studio Arch, desenvolvi um portfólio digital que funciona como uma galeria imersiva. O objetivo não era apenas mostrar fotos de edifícios, mas transmitir a atmosfera e a escala de cada projeto arquitetônico.
      
      A solução técnica envolveu o uso de React.js com animações de transição suaves via Framer Motion. As imagens carregam progressivamente para garantir performance sem sacrificar a qualidade visual. Implementei um sistema de grid assimétrico que quebra a monotonia tradicional de portfólios web, permitindo que cada projeto tenha uma apresentação única baseada na orientação (vertical ou horizontal) das fotografias.
    `,
        images: [
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: 3,
        title: "Financial Dashboard",
        category: "UI/UX",
        client: "FinTech Corp",
        year: "2023",
        role: "Product Designer",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        description: `
      Simplificar dados complexos é uma das tarefas mais gratificantes do design de produto. Para este painel financeiro, o objetivo era tornar a visualização de investimentos e gastos algo intuitivo e até prazeroso para usuários leigos.
      
      Através de extensa pesquisa com usuários, identifiquei que a "fadiga de dados" era o principal problema. Para resolver isso, criei um sistema de hierarquia visual clara, onde apenas as informações críticas são mostradas inicialmente, com detalhes disponíveis sob demanda (progressive disclosure). O modo escuro foi cuidadosamente calibrado para reduzir o cansaço visual durante o uso prolongado.
    `,
        images: [
            "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    },
    {
        id: 4,
        title: "Travel App",
        category: "Mobile Design",
        client: "Wanderlust Inc.",
        year: "2022",
        role: "UI Designer",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
        description: `
      Viajar é sobre descoberta. O aplicativo Wanderlust foi desenhado para ser o companheiro perfeito nessa jornada. O foco foi criar uma interface que inspirasse a exploração, utilizando fotografia em tela cheia e micro-interações que tornam a navegação fluida e orgânica.
      
      A tipografia sans-serif moderna garante legibilidade em movimento, enquanto o sistema de cores vibrante, porém controlado, ajuda a categorizar diferentes tipos de destinos sem sobrecarregar o usuário. Protótipos de alta fidelidade foram essenciais para testar gestos de navegação e garantir que a usabilidade em uma mão só fosse impecável.
    `,
        images: [
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        ]
    }
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div style={{ color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
                <h1>Projeto não encontrado</h1>
                <Link to="/" style={{ marginTop: '20px', textDecoration: 'underline' }}>Voltar para Home</Link>
            </div>
        );
    }

    return (
        <div style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
            <Navbar />

            <article className="container" style={{ paddingBottom: '8rem' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '8rem', marginBottom: '2rem', color: '#aaa' }}>
                    <ArrowLeft size={20} /> Voltar
                </Link>

                {/* Header do Projeto */}
                <div style={{ marginBottom: '4rem' }}>
                    <span style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>
                        {project.category}
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginTop: '0.5rem', marginBottom: '2rem', lineHeight: 1.1 }}>
                        {project.title}
                    </h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', borderTop: '1px solid #333', borderBottom: '1px solid #333', padding: '2rem 0' }}>
                        <div>
                            <span style={{ display: 'block', color: '#666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Client</span>
                            {project.client}
                        </div>
                        <div>
                            <span style={{ display: 'block', color: '#666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Year</span>
                            {project.year}
                        </div>
                        <div>
                            <span style={{ display: 'block', color: '#666', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Role</span>
                            {project.role}
                        </div>
                    </div>
                </div>

                {/* Hero Imagem */}
                <div style={{ width: '100%', height: '60vh', background: '#222', marginBottom: '4rem', borderRadius: '4px', overflow: 'hidden' }}>
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Conteúdo Textual */}
                <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8', color: '#ddd' }}>
                    {project.description.split('\n').map((paragraph, idx) => (
                        <p key={idx} style={{ marginBottom: '2rem' }}>{paragraph}</p>
                    ))}
                </div>

                {/* Galeria Extra (se houver) */}
                {project.images && project.images.map((img, idx) => (
                    <div key={idx} style={{ width: '100%', marginTop: '4rem', borderRadius: '4px', overflow: 'hidden' }}>
                        <img src={img} alt="Detail" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                ))}

            </article>

            <Footer />
        </div>
    );
};

export default ProjectDetails;

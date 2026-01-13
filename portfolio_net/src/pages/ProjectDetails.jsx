import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const projects = [
    {id: 1,
        title: "Planno",
        category: "App Design",
        client: "Autoral",
        year: "2024",
        role: "Lead Designer & Developer",
        image: "/Planno/PLANNO - MOCKUP.jpg",
        images: [
            "/Planno/PLANNO - MOCKUP.jpg"],
        description: `O Planno é um aplicativo de gestão financeira pessoal desenvolvido para apoiar usuários no controle de gastos, definição de metas e acompanhamento do comportamento financeiro. O projeto tem como objetivo transformar dados financeiros em informações claras e acionáveis, facilitando a tomada de decisão.`,
        description2: `A solução foi estruturada a partir de princípios de UX, priorizando arquitetura da informação clara, fluxos intuitivos e redução de carga cognitiva. O aplicativo permite o registro e categorização de despesas, visualização de entradas e saídas, acompanhamento de metas financeiras e análise do uso do dinheiro ao longo do tempo.

O design das interfaces foi orientado por usabilidade, clareza visual e consistência, garantindo uma experiência acessível e eficiente. O Planno demonstra a aplicação do design como ferramenta estratégica para produtos financeiros, alinhando necessidades do usuário e objetivos do produto.`,
        images2: ["/Planno/iPhone 16 - Cadastro.png"],
        images3: ["/Planno/iPhone 16 - Dashboard.png"],
        resultados: ["/Planno/PLANNO - MOCKUP.jpg"]
    },
    {
        id: 2,
        title: "Espaço Cria",
        category: "System Design",
        client: "Espaço Ciência",
        year: "2024",
        role: "UX/UI Designer",
        image: "/ESPACO CRIA/MOCKUP - ESPAÇO CRIA.jpg",
        description: `O Espaço Cria é um projeto de design de sistemas que visa criar uma plataforma digital para a comunidade científica, proporcionando um ambiente colaborativo e acessível para o compartilhamento de ideias, projetos e descobertas. O sistema foi desenvolvido com foco em usabilidade, acessibilidade e integração entre diferentes áreas do conhecimento.`,
        images: [
            "/ESPACO CRIA/MOCKUP - ESPAÇO CRIA.jpg"
        ],
        description2: "O sistema foi projetado através de reuniões com stakeholders, pesquisa de usuários e análise de concorrentes. A arquitetura da informação foi cuidadosamente estruturada para facilitar a navegação e o acesso rápido às funcionalidades principais. O design visual foi desenvolvido para refletir a identidade do Espaço Ciência, utilizando uma paleta de cores vibrante e tipografia moderna.",
        images2: ["/ESPACO CRIA/Dashboard_Espacotech_primeiroparte.png"],
        images3: ["/ESPACO CRIA/Dashboard_Espacotech_gráfico.png"],
        resultados: []
    },
    {
        id: 3,
        title: "Website RoboCin",
        category: "UI/UX",
        client: "RoboCin",
        year: "2023",
        role: "Product Designer",
        image: "/RoboCin/Mockup - RoboCin.jpg",
        description: `
      O projeto de redesign do website da RoboCin surgiu a partir da necessidade de resolver problemas claros identificados durante as primeiras entrevistas e sessões de briefing com o cliente. Foi constatado que os usuários enfrentavam dificuldades relacionadas à falta de acessibilidade, baixa clareza das informações e um fluxo de navegação pouco eficiente, o que impactava diretamente a experiência e a compreensão dos serviços oferecidos.

O projeto foi desenvolvido de forma colaborativa por uma equipe de quatro designers, utilizando o Figma como principal ferramenta. Atuei em todas as etapas do processo, desde a pesquisa até a documentação final.

Na fase de imersão e pesquisa, buscamos compreender profundamente o contexto da empresa, seus objetivos e o comportamento dos usuários. Foram aplicadas análises como a Matriz SWOT, que ajudou a identificar forças, fraquezas, oportunidades e ameaças do produto digital, além da criação de personas representativas do público-alvo. Também utilizamos o Mapa da Empatia para entender necessidades, dores, motivações e expectativas dos usuários em relação ao website.
    `,
     description2: `Com base nos insights obtidos, avançamos para a fase de ideação, onde realizamos sessões de brainstorming focadas em soluções que priorizassem acessibilidade, clareza visual e um fluxo de navegação mais intuitivo. Desenvolvemos a Jornada do Usuário para mapear pontos de contato e identificar oportunidades de melhoria, além da criação de wireframes de baixa e média fidelidade para estruturar a arquitetura da informação e validar fluxos antes do refinamento visual.

Na etapa de prototipação, foram definidos o style guide, componentes e padrões visuais, garantindo consistência, acessibilidade e alinhamento com a identidade da RoboCin. As interfaces foram prototipadas de forma interativa no Figma, permitindo testes e ajustes contínuos ao longo do processo.

Por fim, realizamos a documentação técnica, reunindo especificações de componentes, estilos, espaçamentos e comportamentos das interfaces, facilitando a comunicação com o time de desenvolvimento e assegurando a correta implementação do projeto.

O resultado foi um website mais acessível, claro e funcional, com uma experiência de navegação otimizada e centrada no usuário, atendendo tanto às necessidades da RoboCin quanto às expectativas de seus clientes.`,
        images: [
            "/RoboCin/Time Babi.jpg"
        ],
        images2: [
            "/RoboCin/Início.png"
        ],
        images3: [
            "/RoboCin/Seletiva (1).png"
        ],
        resultados: [
        "/RoboCin/Publicações.png",
        "/RoboCin/Seletiva.png",
        "/RoboCin/Equipe.png"
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
                    <div key={idx} style={{ width: '100%', maxWidth: '800px', margin: '4rem auto 0', marginTop: '4rem', marginBottom: '4rem', borderRadius: '4px', overflow: 'hidden' }}>
                        <img src={img} alt="Detail" style={{ width: '100%', height: 'auto', display: 'block' }} />

                    </div>
                ))}


                {/* Conteúdo Textual 2 */}
                <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8', color: '#ddd' }}>
                    {project.description2.split('\n').map((paragraph, idx) => (
                        <p key={idx} style={{ marginBottom: '2rem' }}>{paragraph}</p>
                    ))}
                </div>


                 {/* Galeria Extra 2 (se houver) */}
                {project.images2 && project.images2.map((img, idx) => (
                    <div key={idx} style={{ width: '100%', maxWidth: '800px', margin: '4rem auto 0', borderRadius: '4px', overflow: 'hidden' }}>
                        <img src={img} alt="Detail" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                ))}


                {/* Galeria Extra 3 (se houver) */}
                {project.images3 && project.images3.map((img, idx) => (
                    <div key={idx} style={{ width: '100%', maxWidth: '800px', margin: '4rem auto 0', borderRadius: '4px', overflow: 'hidden' }}>
                        <img src={img} alt="Detail" style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                ))}


                {/* Resultados Finais */}
                <h2 style={{ maxWidth: '800px', margin: '6rem auto 0', fontSize: '2rem', fontWeight: 'bold', marginBottom: '3rem' }}>
                    Resultados Finais
                </h2>


                {/* Galeria Resultados (3 imagens lado a lado) */}
                {project.resultados && project.resultados.length > 0 && (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto', marginBottom: '4rem' }}>
                        {project.resultados.map((img, idx) => (
                            <div key={idx} style={{ borderRadius: '4px', overflow: 'hidden' }}>
                                <img src={img} alt="Resultado" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </div>
                        ))}
                    </div>
                )}

            </article>

            <Footer />
        </div>
    );
};

export default ProjectDetails;

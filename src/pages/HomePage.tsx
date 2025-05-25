import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage: React.FC = () => {
  const funcionalidades = [
    { icon: "📚", title: "Quizzes Competitivos com Ranking" },
    { icon: "🗓️", title: "Planner Personalizado" },
    { icon: "📄", title: "Resumos Organizados" },
    { icon: "📊", title: "Dashboard de Desempenho" },
    { icon: "🧪", title: "Conteúdo Baseado em Provas" },
    { icon: "🎓", title: "Preparação para Residência" },
  ];

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">Saúde+ Estudo</h1>
          <nav className="nav">
            <Link to="/quizzes">Quizzes</Link>
            <Link to="/planner">Planner</Link>
            <Link to="/resumos">Resumos</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/login">
              <button className="btn">Entrar</button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <h2>Estude para Saúde com Eficiência</h2>
        <p>
          Quizzes interativos com rankeamento, planner personalizado e resumos para Medicina, Enfermagem, Fisioterapia e Biomedicina.
        </p>
        <Link to="/cadastro">
          <button className="btn-large">Comece Agora – Grátis</button>
        </Link>
      </section>

      {/* Funcionalidades */}
      <section className="features">
        {funcionalidades.map(({ icon, title }, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{icon}</div>
            <h3>{title}</h3>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Pronto para transformar seus estudos?</h2>
        <Link to="/cadastro">
          <button className="btn">Criar minha conta grátis</button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Saúde+ Estudo. Todos os direitos reservados.</p>
        <div className="footer-links">
          <Link to="/politica">Política de Privacidade</Link>
          <Link to="/termos">Termos de Uso</Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

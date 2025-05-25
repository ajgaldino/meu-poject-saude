import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-600">Saúde+ Estudo</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#quizzes" className="hover:text-blue-600">Quizzes</a>
            <a href="#planner" className="hover:text-blue-600">Planner</a>
            <a href="#resumos" className="hover:text-blue-600">Resumos</a>
            <a href="#sobre" className="hover:text-blue-600">Sobre</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">Entrar</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center bg-blue-50">
        <h2 className="text-4xl font-extrabold mb-4">Estude para Saúde com Eficiência</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Quizzes interativos com rankeamento, planner personalizado e resumos para Medicina, Enfermagem, Fisioterapia e Biomedicina.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition text-lg">Comece Agora – Grátis</button>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-white" id="funcionalidades">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            { icon: "📚", title: "Quizzes Competitivos com Ranking" },
            { icon: "🗓️", title: "Planner Personalizado" },
            { icon: "📄", title: "Resumos Organizados" },
            { icon: "📊", title: "Dashboard de Desempenho" },
            { icon: "🧪", title: "Conteúdo Baseado em Provas" },
            { icon: "🎓", title: "Preparação para Residência" },
          ].map(({ icon, title }, i) => (
            <div key={i} className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-md transition">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para transformar seus estudos?</h2>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">Criar minha conta grátis</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-10 text-sm text-center">
        <p>© 2025 Saúde+ Estudo. Todos os direitos reservados.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:underline">Termos de Uso</a>
        </div>
      </footer>
    </div>
  );
}

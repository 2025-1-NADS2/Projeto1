import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/footer";
import "./style.css"; // coloque o estilo aqui ou converta o CSS embutido para este arquivo

const noticias = [
  {
    data: "17 de maio de 2025",
    titulo: "FECAP promove semana de inovação",
    resumo: "O evento contou com palestras e workshops voltados à tecnologia e empreendedorismo.",
    imagem: "https://via.placeholder.com/400x180",
  },
  {
    data: "15 de maio de 2025",
    titulo: "Novos cursos de pós-graduação são lançados",
    resumo: "A FECAP amplia sua grade com formações voltadas ao mercado digital e ESG.",
    imagem: "https://via.placeholder.com/400x180",
  },
];

export const Noticias = () => {
  return (
    <main className="all-section">
      <Header />

      <section className="noticias-container">
        <h2>Notícias FECAP</h2>
        <div className="noticias-grid">
          {noticias.map((noticia, index) => (
            <div key={index} className="noticia-card">
              <img src={noticia.imagem} alt={noticia.titulo} />
              <div className="card-content">
                <div className="date">{noticia.data}</div>
                <div className="title">{noticia.titulo}</div>
                <div className="summary">{noticia.resumo}</div>
                <div className="read-more"><a href="#">Leia mais</a></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

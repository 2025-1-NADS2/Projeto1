
// Colaboradores.jsx
import React from "react";
import { ColaboradorCard } from "./ColaboradorCard";
import deyseFoto from "./img/WhatsApp-Image-2021-11-23-at-16.17.24-p-500.jpeg";
import JoãoQuerlon from "./img/joao_querlon.jpg";
import FelipeAlmeida from "./img/felipe_almeida.jpg";
import JoaquimRoberto from "./img/joaquim_roberto.jpg";
import CarlosEAlbertini from "./img/carlos_albertini.jpg";
import MarcosBrito from "./img/marcos_brito.jpg";
import lucy from "./img/foto_rosto_mari.png";;
import rodrigo from "./img/rodrigo_assirati.jpg";
import voluntario1 from "./img/Rectangle-40voluntario.jpg";
import voluntario2 from "./img/Rectangle-67voluntario.jpg";
import voluntario3 from "./img/Rectangle-69voluntario.jpg";
import voluntario4 from "./img/Rectangle-72voluntario.jpg";
import voluntario5 from "./img/Rectangle-73voluntario.jpg";
import voluntario6 from "./img/Rectangle-74voluntario.jpg";
import voluntario7 from "./img/Rectangle-75voluntario.jpg";
import voluntario8 from "./img/Rectangle-76voluntario.jpg";
import voluntario9 from "./img/Rectangle-79voluntario.jpg";
import voluntario10 from "./img/Rectangle-83voluntario.jpg";
import voluntario11 from "./img/Rectangle-85voluntario.jpg";
import voluntario12 from "./img/Rectangle-86voluntario.jpg";
import voluntario13 from "./img/Rectangle-87voluntario.jpg";
import voluntario14 from "./img/Rectangle-89voluntario.jpg";
import voluntario15 from "./img/Rectangle-92voluntario.jpg";
import voluntario16 from "./img/Rectangle-95voluntario.jpg";


import "./style.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/footer";


const colaboradores = [
  { nome: "Deyse Santana", cargo: "Analista Financeira", foto: deyseFoto },
  { nome: "João Querlon", cargo: "Conselheiro Fiscal", foto: JoãoQuerlon },
  { nome: "Felipe Almeida", cargo: "Designer", foto: FelipeAlmeida },
  { nome: "Joaquim Roberto", cargo: "Conselheiro", foto: JoaquimRoberto },
  { nome: "Carlos E. Albertini", cargo: "Psicoterapeuta", foto: CarlosEAlbertini},
  { nome: "Marcos Brito", cargo: "Gestor de conteúdo", foto: MarcosBrito },
];

const fotosVoluntarios = [
  voluntario1,
  voluntario2,
  voluntario3,
  voluntario4,
  voluntario5,
  voluntario6,
  voluntario7,
  voluntario8,
  voluntario9,
  voluntario10,
  voluntario11,
  voluntario12,
  voluntario13,
  voluntario14,
  voluntario15,
  voluntario16,
];


export const Colaboradores = () => (
  <>

  <Header/>
  <section className="colaboradores-container">
  <h1 className="Titulo-pagina">Colaboradores</h1>/

 
  <p className="subtitulo">Quem nos ajuda nessa incrível jornada</p>

  <div className="destaques">
    <div className="card-destaque">
      <img src={lucy} alt="Lucy Mari" />
      <h3>Lucy Mari</h3>
      <h4>Presidente e fundadora</h4>
      <p>
        Empresária, educadora, psicoterapeuta, formada em matemática, mestre em
        ciência da computação, MBA em educação e doutora em engenharia de computação
        pela USP.
      </p>
    </div>

    <div className="card-destaque">
      <img src={rodrigo} alt="Rodrigo Assirati" />
    
      <h3>Rodrigo Assirati</h3>
      <h4>Vice-presidente</h4>
      <p>
        Educador e empreendedor, especialista em educação pela Microsoft e consultor
        de tecnologia em várias empresas.
      </p>
    </div>
  </div>

    <h2 className="Voluntarios">Parceiros e voluntários</h2>
    <p className="Voluntarios2">Quem nos ajuda nessa incrível jornada</p>

    <div className="colaboradores-grid">
      {colaboradores.map((colab, index) => (
        <ColaboradorCard key={index} {...colab} />
      ))}
    </div>

        <h2 className="Voluntarios">Voluntários de apoio</h2>
    <p className="Voluntarios2">Colaboradores que apoiam nossas ações</p>
    <div className="fotos-voluntarios-grid">
      {fotosVoluntarios.map((foto, index) => (
        <img key={index} src={foto} alt={`Voluntário ${index + 1}`} className="foto-voluntario" />
      ))}
    </div>

    
  </section>
  <Footer/>
  </>
);
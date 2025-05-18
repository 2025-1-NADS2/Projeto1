import "./Dashboard.css";
import React, { useState } from 'react';

// Importa os gráficos de belezuras
import ApexChart from "../../features/PieChart/PieChart";
import TreeMap from "../../features/TreeMap/TreeMap";
import HeatMap from "../../features/HeatMap/HeatMap";
import PolarAreaCharts from "../../features/PolarAreaCharts/PolarAreaCharts";
import BarChart from "../../features/BarChart/BarChart";
import RealTimeChart from "../../features/RealTimeChart/RealTimeChart";

// Componentes reutilizáveis
import Card from "../Card/Card";
import FormParticipante from "../FormParticipante/FormParticipante";

export default function Dashboard() {
  // Aqui a gente guarda os participantes que forem sendo adicionados
  const [participantes, setParticipantes] = useState([]);

  // Quando alguém manda o form joga o novo participante aqui
  const adicionarParticipante = (novo) => {
    setParticipantes((prev) => [...prev, novo]);
  };

  return (
    <div className="container">
      <div className="conteudo">

        {/* Primeira faixa do dashboard —  resumos */}
        <div className="miniretangulo">
          {/* Cartõezinhos reutilizáveis com info geral */}
          <Card title="Participantes" value="150" />
          <Card title="Eventos" value="12" />
          <Card title="Organizadores" value="37" />
          <Card title="Inscrições" value="89" />
        </div>

        {/* Parte onde o usuário pode cadastrar um novo participante */}
        <div className="form-section">
          <h3>Adicionar Participante</h3>
          {/* Formulário que usa estados pra guardar o que foi digitado */}
          <FormParticipante onAdd={adicionarParticipante} />
        </div>

        {/* Tabela que mostra os nomes cadastrados no form acima */}
        <div className="participantes">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cargo</th>
              </tr>
            </thead>
            <tbody>
              {/* Aqui ele só vai renderizar quem já foi adicionado */}
              {participantes.map((p, i) => (
                <tr key={i}>
                  <td>{p.nome}</td>
                  <td>{p.cargo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Parte dos gráficos — visual */}
        <div className="ContainerVertical">
          <div className="Grafico">
            {/* Repetindo o mesmo gráfico algumas vezes, só pra encher o espaço */}
            <div className="Espaço"><ApexChart /></div>
            <div className="Espaço"><ApexChart /></div>
            <div className="Espaço"><ApexChart /></div>
            <div className="Espaço"><ApexChart /></div>
          </div>

          <div className="GraficoJunto">
            <div className="EspaçoJunto"><PolarAreaCharts /></div>
            <div className="EspaçoJunto"><BarChart /></div>
          </div>
        </div>

        {/* Um separador meio que só pra dar um respiro na tela */}
        <div className="Separador">
          <span>Monetario</span>
        </div>

        {/* Outro gráfico embaixo esse aqui atualiza em tempo real (ou finge que sim) */}
        <div className="ContainerVertical">
          <div className="GraficoJunto">
            <RealTimeChart />
          </div>
        </div>

        {/* Mais alguns cards com números GIGAGNTES de dinheiro */}
        <div className="miniretangulo">
          <Card title="Doação" value="R$ 1.500.000" />
          <Card title="Palestra" value="R$ 500.000" />
          <Card title="Terapia" value="R$ 2.000.000" />
        </div>
      </div>
    </div>
  );
}

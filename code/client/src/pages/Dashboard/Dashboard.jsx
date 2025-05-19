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
import Card from "../../components/Card/Card";
import FormParticipante from "../../components/FormParticipante/FormParticipante";

const Dashboard = () => {
  const [participantes, setParticipantes] = useState([]);

  const adicionarParticipante = (novo) => {
    setParticipantes((prev) => [...prev, novo]);
  };

  return (
    <div className="container">
      <div className="conteudo">

        <div className="miniretangulo">
          <Card title="Participantes" value="150" />
          <Card title="Eventos" value="12" />
          <Card title="Organizadores" value="37" />
          <Card title="Inscrições" value="89" />
        </div>

        <div className="form-section">
          <div> || AREA DE TESTE || Teste Card </div>
          <h3>Adicionar Participante</h3>
          <FormParticipante onAdd={adicionarParticipante} />
        </div>

        <div className="participantes">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cargo</th>
              </tr>
            </thead>
            <tbody>
              {participantes.map((p, i) => (
                <tr key={i}>
                  <td>{p.nome}</td>
                  <td>{p.cargo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div> FIM AREA DE TESTE</div>

        <div className="ContainerVertical">
          <div className="Grafico">
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

        <div className="Separador">
          <span>Monetario</span>
        </div>

        <div className="ContainerVertical">
          <div className="GraficoJunto">
            <RealTimeChart />
          </div>
        </div>

        <div className="miniretangulo">
          <Card title="Doação" value="R$ 1.500.000" />
          <Card title="Palestra" value="R$ 500.000" />
          <Card title="Terapia" value="R$ 2.000.000" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
export { Dashboard };

import React from "react";
import ReactApexChart from "react-apexcharts";

const PolarAreaCharts = () => {
  const [state, setState] = React.useState({

    series: [14, 23, 21],
    options: {
      chart: {
        width: 380,
        type: "polarArea",
      },
      title: {
        text: "Quantidade Eventos",
        align: 'middle',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          fontFamily: undefined,
          color: '#263238'
        },
      },
      theme: {
        mode: 'light',
        palette: 'palette3',
        monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      legend: {
        position: "bottom",
      },
      yaxis: {
        show: true
      },
      labels: ['Palestra', 'Terapias', 'Doação'],
      fill: {
        opacity: 1,
      },
    },
  })
  return (
    <div>
      <ReactApexChart options={state.options} series={state.series} type="polarArea" width={380} />
    </div>
  );
}

export default PolarAreaCharts

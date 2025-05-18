import React from 'react';
import ReactApexChart from 'react-apexcharts';

const generateData = (count, yrange) => {
    let i = 0;
    const series = [];
    while (i < 24) {
        const x = `${i + 1}`;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({ x, y });
        i++;
    }
    return series;
};

const HeatMap = () => {
    const [state, setState] = React.useState({
        series: [
            { name: 'Domingo', data: generateData(20, { min: 0, max: 100 }) },
            { name: 'Sabado', data: generateData(20, { min: 0, max: 100 }) },
            { name: 'Sexta', data: generateData(20, { min: 0, max: 100 }) },
            { name: 'Quinta', data: generateData(20, { min: 0, max: 100 }) },
            { name: 'Quarta', data: generateData(20, { min: 0, max: 100 }) },
            { name: 'Terça', data: generateData(20, { min: 0, max: 100 }) },
            { name: 'Segunda', data: generateData(20, { min: 0, max: 100 }) }
        ],
        options: {
            chart: {
                height: 450,
                type: 'heatmap',
            },
            plotOptions: {
                heatmap: {
                    shadeIntensity: 0.8,
                    radius: 0,
                    useFillColorAsStroke: true,
                    colorScale: {
                        ranges: [
                            { from: 0, to: 25, name: 'Muito baixo', color: '#E0F7FA' },
                            { from: 26, to: 50, name: 'Baixo', color: '#81D4FA' },
                            { from: 51, to: 75, name: 'Médio', color: '#0288D1' },
                            { from: 76, to: 100, name: 'Alto', color: '#01579B' }
                        ]
                    }
                }
            },
            dataLabels: { enabled: false },
            stroke: { width: 1 },
            title: { text: 'HeatMap Chart with Color Range' }
        }
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="heatmap" height={350} />
            </div>
        </div>
    );
};

export default HeatMap;

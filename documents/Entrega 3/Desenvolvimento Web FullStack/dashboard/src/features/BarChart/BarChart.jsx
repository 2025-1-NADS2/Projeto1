import React from 'react'
import ReactApexChart from 'react-apexcharts'

const BarChart = () => {
    const [state, setState] = React.useState({
        series: [{
            name: 'Ingressos',
            data: [1, 3.5, 5]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 150,
            },
            plotOptions: {
                bar: {
                    barHeight: '50%',
                    distributed: true,
                    horizontal: true,
                    dataLabels: {
                        position: 'bottom'
                    },
                }
            },
            title: {
                text: "Avaliação Eventos",
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
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val
                },

                offsetY: 0,
                offsetX: 10,
                style: {
                    fontSize: '20px',
                    colors: ['#fff'] // cor do número
                }
            },
            colors: ['#33b2df', '#d4526e', '#546E7A'
            ],
            stroke: {
                width: 2,
                colors: ['#fff']
            },
            xaxis: {
                categories: ['Palestras', 'Doação', 'Terapia'],
            }
        }
    });

    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="bar"
                width={500}
            />
        </div>
    )
}

export default BarChart

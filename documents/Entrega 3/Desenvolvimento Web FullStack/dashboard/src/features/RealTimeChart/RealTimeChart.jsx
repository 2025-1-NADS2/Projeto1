import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const XAXIS_RANGE = 10000;

const generateNewPoint = (lastDate, range) => {
  const newDate = lastDate + 1000;
  const newValue = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  return { x: newDate, y: newValue };
};

const ApexChart = () => {
  const [series1, setSeries1] = useState([]);
  const [series2, setSeries2] = useState([]);
  const [series3, setSeries3] = useState([]);
  const [lastDate, setLastDate] = useState(new Date().getUTCDate());

  // Dados iniciais
  useEffect(() => {
    const initial1 = [];
    const initial2 = [];
    const initial3 = [];
    let base = lastDate;
    for (let i = 0; i < 10; i++) {
      initial1.push(generateNewPoint(base, { min: 10, max: 90 }));
      initial2.push(generateNewPoint(base, { min: 20, max: 70 }));
      initial3.push(generateNewPoint(base, { min: 30, max: 60 }));
      base += 1000;
    }
    setSeries1(initial1);
    setSeries2(initial2);
    setSeries3(initial3);
    setLastDate(base);
  }, []);

  // Atualização dinâmica
  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint1 = generateNewPoint(lastDate, { min: 10, max: 90 });
      const newPoint2 = generateNewPoint(lastDate, { min: 20, max: 70 });
      const newPoint3 = generateNewPoint(lastDate, { min: 30, max: 60 });

      setSeries1((prev) => [...prev.slice(1), newPoint1]);
      setSeries2((prev) => [...prev.slice(1), newPoint2]);
      setSeries3((prev) => [...prev.slice(1), newPoint3]);
      setLastDate(newPoint1.x);
    }, 500);

    return () => clearInterval(interval);
  }, [lastDate]);
  

  const options = {
    chart: {
      id: 'realtime',
      type: 'line',
      height: 350,
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: ['#33b2df', '#d4526e', '#546E7A'
    ],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Dynamic Updating Chart (2 Séries)',
      align: 'left'
    },
    markers: {
      size: 1
    },
    xaxis: {
      type: 'datetime',
      range: XAXIS_RANGE
    },
    yaxis: {
      max: 100
    },
    legend: {
      show: true
    }
    
  };

  const series = [
    { name: 'Palestra', data: series1 },
    { name: 'Doação', data: series2 },
    { name: 'Terapias', data: series3 }
  ];

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" height={450}  width={1000}/>
    </div>
  );
};

export default ApexChart;

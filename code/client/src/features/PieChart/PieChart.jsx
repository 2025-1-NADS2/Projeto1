import React from 'react';
import ReactApexChart from 'react-apexcharts';


const ApexChart = () => {
  const [state, setState] = React.useState({
    name: 'ApexChart',
    series: [252, 205, 102],
    options: {
      chart: {
        width: 480,
        type: 'pie',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
            },
        }
      }]
    }
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width={280}
      />
    </div>
  );
};

export default ApexChart;

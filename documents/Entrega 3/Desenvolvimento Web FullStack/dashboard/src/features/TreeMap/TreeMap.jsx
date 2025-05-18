import React from 'react'
import ReactApexChart from 'react-apexcharts'

const ApexChart = () => {
  const [state, setState] = React.useState({

    series: [
      {
        data: [
          {
            x: 'Google',
            y: 218
          },
          {
            x: 'Microsoft',
            y: 149
          },
          {
            x: 'Mumbai',
            y: 20
          },
          {
            x: 'Ahmedabad',
            y: 55
          },
          {
            x: 'Bangaluru',
            y: 84
          },
          {
            x: 'Pune',
            y: 31
          },
          {
            x: 'Chennai',
            y: 70
          },
          {
            x: 'Jaipur',
            y: 30
          },
          {
            x: 'Surat',
            y: 44
          },
          {
            x: 'Hyderabad',
            y: 68
          },
          {
            x: 'Lucknow',
            y: 28
          },
          {
            x: 'Indore',
            y: 19
          },
          {
            x: 'Kanpur',
            y: 29
          }
        ]
      }
    ],
    options: {
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },

    },


  });



  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="treemap"
        width={500}
      />
    </div>
  )
}

export default ApexChart

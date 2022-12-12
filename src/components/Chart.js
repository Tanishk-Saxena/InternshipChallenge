import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Data } from '../utils/Data';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarController,
  } from 'chart.js';
ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend,
BarController
)

const labels = Data.map((data)=>(data.year));

const data = {
  labels: labels,
  datasets: [{
    label: 'Users Gained',
    data: Data.map((data)=>(data.userGain)),
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
    ],
    borderWidth: 1
  }]
};

const Chart = () => {

  return (
    <div className='chart'>
        <Bar
            data={data} 
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Users Gained Between 2016-2020'
                    },
                    legend: {
                        display: false
                    }
                }
            }}
        />
    </div>

  )
}

export default Chart
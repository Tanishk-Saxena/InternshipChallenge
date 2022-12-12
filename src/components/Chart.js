import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["Average", "Self", "Supervisor", "Peers", "Direct Reports"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset",
        backgroundColor: [
          "rgb(118,113,113)",
          "rgb(0,157,190)",
          "rgb(225,0,74)",
          "rgb(74,215,43)",
          "rgb(255,145,3)"
        ],
        barThickness: '15',
        data: [4.11, 4.00, 5.00, 4.00, 4.00],
      },
    ],
  };
  return (
    <div className="chart">
      <Bar data={data} options={{indexAxis: 'y', scales: {
          x: {
            min: 0,
            max: 5,
            ticks: {
              stepSize: 1
            }
          }
        }}} />
    </div>
  );
};

export default BarChart;
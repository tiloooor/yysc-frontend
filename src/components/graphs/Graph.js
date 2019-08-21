import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {
  const randomNumber = (minimum, maximum) => {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
  };

  var Data = [];
  for (var i = 0; i < 35; i++) {
    Data.push(randomNumber(0, 100));
  }

  const options = {
    responsive: true,
    legend: {
      display: false
    },
    scales: {
      xAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: { display: false },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ]
    }
  };

  const data = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 500, 0);
    gradient.addColorStop(0, 'rgba(209, 207, 226, 0.2)');
    gradient.addColorStop(0.5, 'rgba(149, 206, 215, 0.35)');
    gradient.addColorStop(1, 'rgba(209, 207, 226, 0.7)');

    return {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [
        {
          data: Data,
          backgroundColor: gradient
        }
      ]
    };
  };

  return (
    <div className="container">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;

// PieChart.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy the existing Chart instance if it exists
    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    // Create a new Chart instance
    chartRef.current.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Sales Order(12,120)', 'Invoice(12,120)', 'Inbound(1,201)'],
        datasets: [
          {
            data: [12120, 12120, 1201],
            backgroundColor: ['#6CBDBF', '#57A0E5', '#ED6D84'],
            borderWidth: 0.5,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        layout: {
            padding: 0
        }
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default PieChart;

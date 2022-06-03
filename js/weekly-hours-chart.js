const weekly_hours_ctx = document.getElementById('weekly-hours-chart').getContext('2d');
const weeklyHoursChart = new Chart(weekly_hours_ctx, {
  plugins: [ChartDeferred],
    type: 'bar',
    data: {
      labels: ["Regular","Temporary",["Directors", "who Employ"],["Directors", "who do not", "Employ"],["Family", "Workers"],["Handicraft", "Workers"]],
      datasets: [
        {
          label: 'Male',
          data: [47.9, 33, 50.4, 43.6, 45.2, 28.9],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
          
        },
        {
          label: 'Female',
          data: [38.9, 26.4, 42.7, 32.9, 38, 24.4],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      animation: {
        duration: 2000,
      },
      scales: {
          y: {
              beginAtZero: true
          }
      },
      plugins: {
        deferred: {
          yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
          delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
        },
        title: {
          display: true,
          text: 'Average number of hours worked per week per employee type in 2000'
        }
      }
    }
});
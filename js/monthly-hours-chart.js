const monthly_hours_ctx = document.getElementById('monthly-hours-chart').getContext('2d');
const monthlyHoursChart = new Chart(monthly_hours_ctx, {
  plugins: [ChartDeferred],
    type: 'bar',
    data: {
        labels: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021],
        datasets: [{
            label: 'Hours Worked',
            data: [147.1, 145.5, 145.1, 144.5, 143.7, 143.4, 142.2, 139.1, 135.1, 136.1],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
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
          text: 'Average number of hours worked per month 2012-2021'
        }
      }
    }
});
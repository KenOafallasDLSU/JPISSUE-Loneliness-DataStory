const suicide_ctx = document.getElementById('suicide-chart').getContext('2d');
const suicideChart = new Chart(suicide_ctx, {
  plugins: [ChartDeferred],
    type: 'bar',
    data: {
        labels: [1995,2000,2005,2010,2014,2015,2016,2017,2018,2019,2020],
        datasets: [{
            label: 'Number of Suicides',
            data: [21420,30251,30553,29554,24417,23152,21021,20468,20031,19425,20243],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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
          text: 'Suicide Cases 1995-2020'
        }
      }
    }
});
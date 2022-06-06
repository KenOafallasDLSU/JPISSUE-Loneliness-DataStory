const loneliness_pie_ctx = document.getElementById('loneliness-pie').getContext('2d');
const lonelinessPieChart = new Chart(loneliness_pie_ctx, {
  plugins: [ChartDeferred],
    type: 'bar',
    data: {
        labels: ["Ages 20s", "Ages 30s", "Ages 40s", "Ages 50s", "Ages 60s +"],
        datasets: [{
            label: 'Sample Percentage',
            data: [42.7, 41.6, 40.5, 38.4, 23.7],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
      animation: {
        duration: 2000,
      },
      plugins: {
        deferred: {
          yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
          delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
        },
        title: {
          display: true,
          text: 'Percentage of Loneliness Among Japanese Age 20 and Over'
        }
      }
    }
});
const hikikomori_pie_ctx = document.getElementById('hikikomori-pie').getContext('2d');
const hikikmoroPieChart = new Chart(hikikomori_pie_ctx, {
  plugins: [ChartDeferred],
    type: 'doughnut',
    data: {
        labels: ["Ages 40 - 54", "Ages 15 - 39"],
        datasets: [{
            label: 'Hikikomori Cases',
            data: [613000, 541000],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
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
          text: 'Aggregate Age of Hikikomori Cases'
        }
      }
    }
});
const kadokushi_ctx = document.getElementById('kadokushi-chart').getContext('2d');
const kadokushiChart = new Chart(kadokushi_ctx, {
  plugins: [ChartDeferred],
  type: 'bar',
  data: {
    labels: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
    datasets: [
      {
        label: "Male",
        data: [1985,2092,2350,2362,2616,2577,2711,3141,3097,3057,3090,3091,3292,3190],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: "Female",
        data: [876,960,1033,1033,1334,1203,1164,1570,1393,1415,1425,1375,1398,1414],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1
      },
    ]
  },
  options: {
    animation: {
      duration: 2000,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
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
        text: 'Annual Cases of Kodokushi in Tokyo 2003-2016'
      }
    }
  }
})

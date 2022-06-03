const pyramid_ctx = document.getElementById('population-pyramid').getContext('2d');

const red = 'rgba(255, 99, 132, 1)'
const red1 = 'rgba(255, 99, 132, 0.1)'
const red2 = 'rgba(255, 99, 132, 0.4)'
const red3 = 'rgba(255, 99, 132, 0.9)'
const blue = 'rgba(54, 162, 235, 1)'
const blue1 = 'rgba(54, 162, 235, 0.1)'
const blue2 = 'rgba(54, 162, 235, 0.4)'
const blue3 = 'rgba(54, 162, 235, 0.9)'

const pyramidChart = new Chart(pyramid_ctx, {
  plugins: [ChartDeferred],
  type: 'bar',
  data: {
    labels: ["100+","95 - 99","90 - 94","85 - 89","80 - 84","75 - 79","70 - 74","65 - 69","60 - 64","55 - 59","50 - 54","45 - 49","40 - 44","35 - 39","30 - 34","25 - 29","20 - 24","15 - 19","10 - 14","5 - 9","0 - 4"],
    datasets: [
      {
        label: "Male",
        data: [2236,2574,2741,2855,3195,3273,3339,3725,4125,4908,4705,3900,3650,3802,4548,3001,2331,1394,535,107,11].reverse().map(value => -value),
        backgroundColor: [blue3,blue3,blue3,blue3,blue3,blue3,blue3,blue3,blue2,blue2,blue2,blue2,blue2,blue2,blue2,blue2,blue2,blue1,blue1,blue1,blue1],
        borderColor: blue,
        borderWidth: 1
      },
      {
        label: "Female",
        data: [2134,2450,2607,2707,3050,3102,3193,3608,4010,4786,4640,3908,3732,4022,5088,3727,3280,2489,1379,437,76].reverse(),
        backgroundColor: [red3,red3,red3,red3,red3,red3,red3,red3,red2,red2,red2,red2,red2,red2,red2,red2,red2,red1,red1,red1,red1],
        borderColor: red,
        borderWidth: 1
      },
    ]
  },
  options: {
    animation: {
      duration: 2000,
    },
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: (value, index, values) => Math.abs(value)
        }
      },
      y: {
        stacked: true,
      }
    },
    plugins: {
      deferred: {
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
      title: {
        display: true,
        text: 'Japanese Population Pyramid 2021'
      },
      tooltip: {
        yAlign: "bottom",
        titleAlign: "center",
        callbacks: {
          label: context => `${context.dataset.label}: ${Math.abs(context.raw)}`
        }
      }
    }
  }
})

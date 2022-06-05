const positive_ctx = document.getElementById('positive-chart').getContext('2d');
const positive_totalDuration = 1300;
const positive_delayBetweenPoints = positive_totalDuration / 13;
const positive_previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const positive_animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: positive_delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * positive_delayBetweenPoints;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: positive_delayBetweenPoints,
    from: positive_previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * positive_delayBetweenPoints;
    }
  }
};
const positiveChart = new Chart(positive_ctx, {
  plugins: [ChartDeferred],
  type: 'line',
  data: {
    labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    datasets: [
      {
        label: "Suicides",
        data: [29554,24417,23152,21021,20468,20031,19425,20243],
        backgroundColor: "#3452eb"
      },
      {
        label: "Severe Mental Illness",
        data: [1.4,1.9,3.3,4.3,4.5,4.3,4.3,5.1,5.8,7.3,10.6,14.1,17.5],
        backgroundColor: "#eb3434"
      },
      {
        label: "Work hours",
        data: [147.1, 145.5, 145.1, 144.5, 143.7, 143.4, 142.2, 139.1, 135.1],
        backgroundColor: "#eb0034"
      },
    ]
  },
  options: {
    animation: positive_animation,
    elements: {
      line: {
          tension: 0 // disables bezier curves
      }
    },
    scales: {
      y: {
        type: "linear"
      }
    },
    plugins: {
      // title: {
      //   display: true,
      //   text: 'Positive Metrics'
      // },
      deferred: {
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      }
    }
  }
})

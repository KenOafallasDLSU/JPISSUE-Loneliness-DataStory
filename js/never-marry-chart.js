const never_ctx = document.getElementById('never-chart').getContext('2d');
const never_totalDuration = 1300;
const never_delayBetweenPoints = never_totalDuration / 13;
const never_previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const never_animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: never_delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * never_delayBetweenPoints;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: never_delayBetweenPoints,
    from: never_previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * never_delayBetweenPoints;
    }
  }
};
const neverChart = new Chart(never_ctx, {
  plugins: [ChartDeferred],
  type: 'line',
  data: {
    labels: [1950,1960,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015,2020],
    datasets: [
      {
        label: "Male",
        data: [1.5,1.3,1.7,2.1,2.6,3.9,5.6,9.0,12.6,16.0,20.1,23.4,26.7],
        backgroundColor: "#3452eb"
      },
      {
        label: "Female",
        data: [1.4,1.9,3.3,4.3,4.5,4.3,4.3,5.1,5.8,7.3,10.6,14.1,17.5],
        backgroundColor: "#eb3434"
      },
    ]
  },
  options: {
    animation: never_animation,
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
      deferred: {
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      },
      title: {
        display: true,
        text: 'Percentage of Age 50 who have Never Married 1950-2020'
      }
    }
  }
})

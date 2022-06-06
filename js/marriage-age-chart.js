const age_ctx = document.getElementById('age-chart').getContext('2d');
const age_totalDuration = 1500;
const age_delayBetweenPoints = age_totalDuration / 15;
const age_previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const age_animation = {
  x: {
    type: 'number',
    easing: 'linear',
    duration: age_delayBetweenPoints,
    from: NaN, // the point is initially skipped
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * age_delayBetweenPoints;
    }
  },
  y: {
    type: 'number',
    easing: 'linear',
    duration: age_delayBetweenPoints,
    from: age_previousY,
    delay(ctx) {
      if (ctx.type !== 'data' || ctx.yStarted) {
        return 0;
      }
      ctx.yStarted = true;
      return ctx.index * age_delayBetweenPoints;
    }
  }
};
const ageChart = new Chart(age_ctx, {
  plugins: [ChartDeferred],
  type: 'line',
  data: {
    labels: [1950,1955,1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015,2020],
    datasets: [
      {
        label: "Male",
        data: [25.9,26.6,27.2,27.2,26.9,27.0,27.8,28.2,28.4,28.5,28.8,29.8,30.5,31.1,31.0],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: "Female",
        data: [23.0,23.8,24.4,24.5,24.2,24.7,25.2,25.5,25.9,26.3,27.0,28.0,28.8,29.4,29.4],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1
      },
    ]
  },
  options: {
    animation: age_animation,
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
        text: 'Average Marrying Age in Japan 1950-2020'
      }
    }
  }
})

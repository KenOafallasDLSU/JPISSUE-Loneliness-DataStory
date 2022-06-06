let percentChangeGetter = (dataList) => {
  resultList = []

  for(let i = 0; i < dataList.length; i++)
  {
    //let delta = dataList[i] - dataList[i+1]
    let delta = dataList[i] - dataList[0]
    let proportion = delta / dataList[0]
    let percentage = Math.round(proportion * 10000) / 100
    resultList.push(percentage)
    console.log(delta + " " + proportion + " " + percentage)
  }

  return resultList
}

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
    labels: [2010, 2012, 2013, 2014,2015,2016,2017,2018,2019,2020],
    datasets: [
      {
        label: "Percent Change in Suicides Cases",
        data: percentChangeGetter([29554,27858, 27283,24417,23152,21021,20468,20031,19425,20243]),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
      }
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
      title: {
        display: true,
        text: 'Percent Decrease in Suicides in Japan Compared to 2010'
      },
      deferred: {
        yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      }
    }
  }
})

const SAMPLE_CHARTS_DATA = [
  {
    name: "Chart 1",
    color: "#af3127",
    data: [
      { date: "1 Aug", usage: 0 },
      { date: "2 Aug", usage: 0.51 },
      { date: "3 Aug", usage: 0.652 },
      { date: "4 Aug", usage: 0.6 },
      { date: "5 Aug", usage: 0.62 },
      { date: "6 Aug", usage: 0.68 },
      { date: "7 Aug", usage: 0.75 },
      { date: "8 Aug", usage: 0.67 },
      { date: "9 Aug", usage: 0.7 },
      { date: "10 Aug", usage: 0.73 },
      { date: "11 Aug", usage: 0.71 },
      { date: "12 Aug", usage: 0.69 },
      { date: "13 Aug", usage: 0.72 },
      { date: "14 Aug", usage: 0.74 },
      { date: "15 Aug", usage: 0.765 },
      { date: "16 Aug", usage: 0.78 },
      { date: "17 Aug", usage: 0.8 },
      { date: "18 Aug", usage: 0.82 },
      { date: "19 Aug", usage: 0.79 },
      { date: "20 Aug", usage: 0.77 },
      { date: "21 Aug", usage: 0.75 },
      { date: "22 Aug", usage: 0.74 },
      { date: "23 Aug", usage: 0.73 },
      { date: "24 Aug", usage: 0.71 },
      { date: "25 Aug", usage: 0.7 },
      { date: "26 Aug", usage: 0.68 },
      { date: "27 Aug", usage: 0.67 },
      { date: "28 Aug", usage: 0.65 },
      { date: "29 Aug", usage: 0.63 },
      { date: "30 Aug", usage: 0.61 },
      { date: "31 Aug", usage: 0.59 },
    ],
  },
  {
    name: "Chart 2",
    color: "#203d91",
    data: [
      { date: "1 Aug", usage: 0 },
      { date: "2 Aug", usage: 0.3 },
      { date: "3 Aug", usage: 0.223 },
      { date: "4 Aug", usage: 0.35 },
      { date: "5 Aug", usage: 0.41 },
      { date: "6 Aug", usage: 0.33 },
      { date: "7 Aug", usage: 0.39 },
      { date: "8 Aug", usage: 0.36 },
      { date: "9 Aug", usage: 0.38 },
      { date: "10 Aug", usage: 0.4 },
      { date: "11 Aug", usage: 0.41 },
      { date: "12 Aug", usage: 0.42 },
      { date: "13 Aug", usage: 0.44 },
      { date: "14 Aug", usage: 0.46 },
      { date: "15 Aug", usage: 0.47 },
      { date: "16 Aug", usage: 0.48 },
      { date: "17 Aug", usage: 0.5 },
      { date: "18 Aug", usage: 0.51 },
      { date: "19 Aug", usage: 0.53 },
      { date: "20 Aug", usage: 0.55 },
      { date: "21 Aug", usage: 0.57 },
      { date: "22 Aug", usage: 0.59 },
      { date: "23 Aug", usage: 0.61 },
      { date: "24 Aug", usage: 0.63 },
      { date: "25 Aug", usage: 0.65 },
      { date: "26 Aug", usage: 0.67 },
      { date: "27 Aug", usage: 0.69 },
      { date: "28 Aug", usage: 0.71 },
      { date: "29 Aug", usage: 0.73 },
      { date: "30 Aug", usage: 0.75 },
      { date: "31 Aug", usage: 0.77 },
    ],
  },
];

async function fakeGetChartsData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        json: async () => SAMPLE_CHARTS_DATA,
      });
    }, 1000);
  });
}

function renderCharts(charts) {
  const chartsEl = document.getElementById("chart");
  const myChart = echarts.init(chartsEl);

  const xAxisData = charts[0].data.map((point) => point.date);

  const seriesData = charts.map((chart) => ({
    name: chart.name,
    type: "line",
    data: chart.data.map((point) => point.usage),
    color: chart.color,
    label: {
      show: false,
      position: "top",
      formatter: "{c} GB",
    },
    emphasis: {
      label: {
        show: true,
      },
    },
  }));

  const option = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: xAxisData,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}",
      },
    },
    series: seriesData,
  };

  myChart.setOption(option);
}

async function getChartsData() {
  try {
    const chartsData = await fakeGetChartsData();
    if (!chartsData.ok) throw new Error("Failed to fetch charts data");

    const charts = await chartsData.json();
    renderCharts(charts);
  } catch (err) {
    console.error("Error fetching charts data:", err);
  }
}

function main() {
  getChartsData();
}

document.addEventListener("DOMContentLoaded", function () {
  main();
});

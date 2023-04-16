const labels = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
const initialData = [];

const ctx = document.getElementById("myChart").getContext("2d");

const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Spectrum",
        data: initialData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 3,
        tension: 0.7,
        // Set the name of the line
      },
    ],
  },
  options: {
    responsive: false,
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
            beginAtZero: false,
            max: 100,
          },
          gridLines: {
            display: false,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    title: {
      display: false,
      text: "Spectrum",
    },
    legend: {
      display: false,
    },
  },
});

// Function to update chart data
function updateChartData() {
  const newData = [];
  const length = labels.length;
  const hue = counter % 101; // Hues range from 0 to 360 degrees, so we need to convert the counter value to a hue value between 0 and 100

  // Calculate the color of the line based on the current hue value
  const color = `hsl(${hue}, 70%, 50%)`;

  for (let i = 0; i < length; i++) {
    const dataPoint = Math.sin((i + counter) * 0.2) * 40 + 50;
    newData.push(dataPoint);
  }

  chart.data.datasets[0].data = newData;
  chart.data.datasets[0].borderColor = color; // Set the color of the line
  chart.update();

  counter++;
}

// Example usage
let counter = 0;
setInterval(updateChartData, 50);

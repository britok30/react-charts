import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getChangingChartData = () => ({
  labels: [
    "Residential Architecture",
    "Commercial Architecture",
    "Industrial Architecture",
    "Sales/Americas",
    "Sales/Asia",
    "Sales/Middle East",
    "Public Policy",
    "Building Safety"
  ],
  datasets: [
    {
      label: "Employees",
      data: [
        getRandomInt(126, 150),
        getRandomInt(124, 150),
        getRandomInt(115, 150),
        getRandomInt(83, 100),
        getRandomInt(74, 100),
        getRandomInt(107, 150),
        getRandomInt(25, 75),
        getRandomInt(28, 75)
      ],
      backgroundColor: [
        "rgba(189, 16, 224, 0.2)",
        "rgba(74, 144, 226, 0.2)",
        "rgba(80, 227, 194, 0.2)",
        "rgba(184, 233, 134, 0.2)",
        "rgba(126, 211, 33, 0.2)",
        "rgba(65, 117, 5, 0.2)",
        "rgba(248, 231, 28, 0.2)",
        "rgba(245, 166, 35, 0.2)"
      ]
    }
  ]
});

class YearChart extends Component {
  state = {
    chartData: this.props.chartData,
    loading: true
  };

  getInitialState() {
    return getChangingChartData();
  }

  componentWillMount() {
    setInterval(() => {
      this.setState(getChangingChartData());
      this.setState({ loading: false });
    }, 5000);
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {loading === true ? (
          <h1>Loading...</h1>
        ) : (
          <div style={{ marginTop: "5rem" }}>
            <Doughnut
              data={this.state}
              options={{
                title: {
                  display: true,
                  text: "Employees per Department (Updates per year since 20XX)",
                  fontSize: 25
                }
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default YearChart;

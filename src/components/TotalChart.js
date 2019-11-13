import React, { Component } from "react";
import { Radar } from "react-chartjs-2";

const data = {
  labels: [
    "Residential Architecture",
    "Commercial Architecture",
    "Industrial Architecture",
    "Sales [Americas/Asia/Middle East/Developing Markets]",
    "Public Policy",
    "Building Safety"
  ],
  datasets: [
    {
      label: "Totals Employees",
      data: [533, 207, 368, 1171, 324, 457],
      backgroundColor: ["rgba(74, 144, 226, 0.4)"]
    }
  ]
};

class TotalChart extends Component {
  render() {
    return (
      <div>
        <Radar
          data={data}
          options={{
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "Total Employees per Department in InterviewOrg",
              fontSize: 25
            }
          }}
        />
      </div>
    );
  }
}

export default TotalChart;

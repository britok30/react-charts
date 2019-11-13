import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";





class MainChart extends Component {
  state = {
    chartData: this.props.chartData
  };

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right"
  };

  render() {
    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          options={{
            maintainAspectRatio: true,
            title: {
              display: true,
              text: "Employees per Department",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        
      </div>
    );
  }
}

export default MainChart;

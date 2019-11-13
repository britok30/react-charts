import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Divider from "./components/Divider";

import MainChart from "./components/MainChart";
import TotalChart from "./components/TotalChart";
import YearChart from "./components/YearChart";

import Footer from "./components/Footer";

import axios from "axios";
import "./App.css"



class App extends Component {
  state = {
    chartData: {}
  };

  componentWillMount() {
    this.getChartData();
  }

  getDepartments() {
    axios.get("employees.json").then(res => {
      console.log(res.data);
    });
  }

  getChartData() {
    axios.get("employees.json").then(res => {
      console.log(res.data);
    });

    this.setState({
      chartData: {
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
            data: [126, 124, 115, 83, 74, 107, 25, 28],
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
      }
    });
  }

  render() {
    const { chartData } = this.state;

    return (
      <div className="container-fluid">
        <Navigation />
        <div className="container divider">
          <h2>Departments</h2>
          <div className="row">
            <div className="col-md-3 resi">
              <Divider
                style={{ marginTop: ".7rem" }}
                department="Residential Architecture"
                leader="Kaitlyn Bowers"
                employees="134 employees"
              />
            </div>
            <div className="col-md-2 comm">
              <Divider
                style={{ marginTop: "4.5rem" }}
                department="Commercial Architecture"
                leader="Alexander Reyes"
                employees="124 employees"
              />
            </div>
            <div className="col-md-2 indus">
              <Divider
                style={{ marginTop: "8.2rem" }}
                department="Industrial Architecture"
                leader="Connor Crane"
                employees="115 employees"
              />
            </div>
            <div className="col-md-1 amer">
              <Divider
                style={{ marginTop: "8.2rem" }}
                department="Sales / Americas"
                leader="Dax Reese"
                employees="83 employees"
              />
            </div>
            <div className="col-md-1 asia">
              <Divider
                style={{ marginTop: "10rem" }}
                department="Sales / Asia"
                leader="Ellison Dougherty"
                employees="74 employees"
              />
            </div>
            <div className="col-md-1 midea">
              <Divider
                style={{ marginTop: "19.5rem" }}
                department="Sales / Middle East"
                leader="Max Krueger"
                employees="107 employees"
              />
            </div>

            <div className="col-md-1 pubpol">
              <Divider
                style={{ marginTop: "27.3rem" }}
                department="Public Policy"
                leader="Heath Rodgers"
                employees="25 employees"
              />
            </div>

            <div className="col-md-1 build">
              <Divider
                style={{ marginTop: "35rem" }}
                department="Building Safety"
                leader="Avalyn Winters"
                employees="28 employees"
              />
            </div>
          </div>
        </div>
        <div className="container main">
          <MainChart chartData={chartData} />
        </div>
        <div className="container total">
          <TotalChart />
        </div>
        <div className="container year">
          <YearChart />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

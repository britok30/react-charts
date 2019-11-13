import React from "react";
import "../App.css";

const Divider = props => {
  return (
    <div className="info" style={props.style}>
      <p className="department">{props.department}</p>
      <p className="leader">{props.leader}</p>
      <p className="employees">{props.employees}</p>
    </div>
  );
};

export default Divider;

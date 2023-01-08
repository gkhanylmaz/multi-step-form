import React from "react";
import Step from "./Step";

const Step4 = (props) => {
  console.log(props);
  return (
    <Step {...props}>
      <div className="step4-table">
        <div className="table">
          <div className="table-header">
            <h2 className="online-box">Arcade(Montly)</h2>
            <a href="/"> Change</a>
          </div>
          <div className="cost">
            <h2> $9/mo</h2>
          </div>
        </div>
        <div className="label"></div>
        <div className="fiyat"></div>
      </div>
    </Step>
  );
};

export default Step4;

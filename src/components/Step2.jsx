import React from "react";
// import { selectItem } from "../contast/selectItem";
import Step from "./Step";
import arcadeIcon from "../assets/images/icon-arcade.svg";

const Step2 = (props) => {
  return (
    <Step {...props}>
      <div className="step2-content">
        <div className="step2-cards">
          <div className="step2-card">
            <img src={arcadeIcon} alt="Arcade" />
            <div className="step2-card-text">
              <h4>Arcade</h4>
              <h6>$9/mo</h6>
            </div>
          </div>
          <div className="step2-card">
            <div className="step2-card-icon">
              <img src={arcadeIcon} alt="Arcade" />
            </div>
            <div className="step2-card-text">
              <h4>Arcade</h4>
              <h6>$9/mo</h6>
            </div>
          </div>
          <div className="step2-card">
            <div className="step2-card-icon">
              <img src={arcadeIcon} alt="Arcade" />
            </div>
            <div className="step2-card-text">
              <h4>Arcade</h4>
              <h6>$9/mo</h6>
            </div>
          </div>
        </div>
      </div>
    </Step>
  );
};

export default Step2;

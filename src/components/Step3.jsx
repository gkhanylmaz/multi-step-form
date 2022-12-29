import React from "react";
import Step from "./Step";

const Step3Item = [
  {
    id: 1,
    title: "Online Services",
    subtitle: "Access to multiplayer games",
    amount: "+$1/month",
  },
  {
    id: 2,
    title: "Large storage",
    subtitle: "Extra 1TB of cloud save",
    amount: "+$2/month",
  },
  {
    id: 3,
    title: "Customizable Profile",
    subtitle: "Custom theme on your profile",
    amount: "+$2/month",
  },
];

const Step3 = (props) => {
  return (
    <>
      <Step {...props}>
        <div className="step3-cards">
          {Step3Item.map((item) => (
            <div className="step3-card" key={item.id}>
              <label className="labelInput">
                <input type="checkbox" checked="false" />
                <span className="checkmark"></span>
              </label>
              <div className="step3-title">
                <h2>{item.title}</h2>
                <p>{item.subtitle}</p>
              </div>
              <p className="amount"> {item.amount}</p>
            </div>
          ))}
        </div>
      </Step>
    </>
  );
};

export default Step3;

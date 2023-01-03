import React, { useState } from "react";
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
  const [selectedAddons, setSelectedAddons] = useState([]);

  const changeSelected = (checked, selectedAddon) => {
    if (checked) {
      setSelectedAddons([...selectedAddons, selectedAddon]);
    } else {
      setSelectedAddons(
        selectedAddons.filter((addon) => addon.id !== selectedAddon.id)
      );
    }
  };

  const checkSelected = (id) => selectedAddons.some((i) => i.id !== id);

  console.log(selectedAddons);

  return (
    <>
      <Step {...props}>
        <div className="step3-cards">
          {Step3Item.map((item) => (
            <div className="step3-card" key={item.id}>
              <label className="labelInput">
                <input
                  defaultChecked={checkSelected(item.id)}
                  type="checkbox"
                  onChange={(e) => changeSelected(e.target.checked, item)}
                />

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

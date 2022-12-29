import React from "react";
import Step from "./Step";

const step1 = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    required: true,
  },
  {
    id: "email-address",
    label: "Email Address",
    type: "mail",
    errorMessage: "It should be a valid email address!",
    placeholder: "e.g. stephenking@lorem.com",
    required: true,
  },
  {
    id: "phone-number",
    label: "Phone Number",
    type: "tel",
    placeholder: "e.g. +1 234 567 890",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    required: true,
  },
];

const Step1 = (props) => {
  return (
    <Step {...props}>
      {step1.map((step) => (
        <form>
          <label>{step.label}</label>
          <input
            type="text"
            className="form-control"
            placeholder={step.placeholder}
          />
        </form>
      ))}
    </Step>
  );
};

export default Step1;

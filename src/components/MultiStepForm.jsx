import React from "react";
import Sidebar from "./Sidebar";
import Step1 from "./Step1";

const MultiStepForm = () => {
  return (
    <div className="multi-step">
      <Sidebar />
      <Step1 />
    </div>
  );
};

export default MultiStepForm;

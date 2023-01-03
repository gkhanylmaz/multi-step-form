import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Steps = {
  step1: {
    component: Step1,
    title: "Personal Info",
    subtitle: "Please privide your name, email adress, and phone number",
    nextButton: true,
  },
  step2: {
    component: Step2,
    title: "Select your plan",
    subtitle: "You have the option of moontly or yearacl biling",
    nextButton: true,
    backButton: true,
  },
  step3: {
    component: Step3,
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
    nextButton: true,
    backButton: true,
  },
  step4: {
    component: Step4,
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before comfirming.",
    backButton: true,
  },
};

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState("step1");

  const ActiveStep = Steps[activeStep].component;

  return (
    <div className="multi-step">
      <Sidebar activeStep={activeStep} />
      <ActiveStep {...Steps[activeStep]} />
    </div>
  );
};

export default MultiStepForm;

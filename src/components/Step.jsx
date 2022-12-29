import React from "react";

const Step = ({ title, subtitle, children, backButton, nextButton }) => {
  return (
    <div className="step1">
      <div className="step1-header">
        <h1> {title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="body">{children}</div>
      <div className="step1-footer">
        {backButton && <button className="step1-goback"> Go Back </button>}
        {nextButton ? (
          <button className="step1-next"> Next Step </button>
        ) : (
          <button> Confirm </button>
        )}
      </div>
    </div>
  );
};

export default Step;

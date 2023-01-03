import React, { useState } from "react";

const sidebarItem = [
  {
    id: "step1",
    number: "1",
    subtitle: "STEP 1",
    title: "YOUR INFO",
  },
  {
    id: "step2",
    number: "2",
    subtitle: "STEP 2",
    title: "SELECT PLAN",
  },
  {
    id: "step3",
    number: "3",
    subtitle: "STEP 3",
    title: "ADD-ONS",
  },
  {
    id: "step4",
    number: "4",
    subtitle: "STEP 4",
    title: "SUMMARY",
  },
];

const Sidebar = ({ activeStep }) => {
  return (
    <div className="sidebar">
      {sidebarItem.map((item) => (
        <div className="sidebar-table" key={item.id}>
          <p
            className={`sidebar-table-icon ${
              activeStep === item.id ? "icon-background" : ""
            }`}
          >
            {item.number}
          </p>
          <div className="sidebar-title">
            <h5>{item.subtitle}</h5>
            <h4> {item.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

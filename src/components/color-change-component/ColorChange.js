import React from "react";
import listColor from "./../../JSON/resume.json";

export const ColorChange = props => {
  const { resumeColor = [] } = listColor;

  const resumeColorDOM = createResumeDOM(resumeColor, props);

  return <div className="color-container">{resumeColorDOM}</div>;
};

const createResumeDOM = (resumeColorParam, props) => {
  return resumeColorParam.map((color, index) => {
    return (
      <div className="color-container-border" key={index}>
        <div
          className="color-pallet-background"
          style={{ backgroundColor: color.lightColor }}
          onClick={() => props.setBackgroundColor(color)}
        ></div>
      </div>
    );
  });
};

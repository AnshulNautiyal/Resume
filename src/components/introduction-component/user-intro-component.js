import React from "react";
import profile from "./../../image/anshul.jpg";

export const Name = props => <h1 className={props.className}>{props.name}</h1>;

export const Designation = props => (
  <h2 className={props.className}>{props.designation}</h2>
);

export const IntroSummary = props => (
  <p className={props.className}>{props.summary}</p>
);

export const UserProfile = props => {
  const { backgroundDarkColor = "" } = props;
  return (
    <div
      className={props.className}
      style={{ borderColor: backgroundDarkColor }}
    >
      <img src={profile} alt="User-Profile-img" />
    </div>
  );
};

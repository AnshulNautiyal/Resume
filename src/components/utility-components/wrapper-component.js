import React from "react";

export default props => (
  <div
    className={props.className}
    style={{ backgroundColor: props.backgroundColor }}
  >
    {" "}
    {props.children}{" "}
  </div>
);

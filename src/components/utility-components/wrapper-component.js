import React from "react";

export default props => {
  const { id = "", className = "", backgroundColor = "" } = props;

  return (
    <div
      className={className}
      style={{ backgroundColor: backgroundColor }}
      id={id}
    >
      {" "}
      {props.children}{" "}
    </div>
  );
};

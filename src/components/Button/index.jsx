import React from "react";
import "./Button.css";

const Button = ({
  children,
  disabled,
  onClick = () => alert ("Check All Details.Your password must be at least 8 characters long"),
  text = "Submit",
}) => {
  return (
    <button className="btn" onClick={onClick} disabled={!disabled}>
      {children || text}
    </button>
  );
};

export default Button;

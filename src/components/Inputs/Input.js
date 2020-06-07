import React from "react";
import "./input.scss";

const Input = (props) => (
  <div className="input__wrapper">
    <label className="input__label" id={props.name}>{props.label}</label>
    <input
      className="input__text"
      type="text"
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  </div>
);

export default Input;
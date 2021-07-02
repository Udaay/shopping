import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input handleChange={handleChange} className="form-input" {...otherProps} />
    {label ? <label> {label} </label> : null}
  </div>
);

export default FormInput;

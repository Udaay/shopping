import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted-style" : null}
     ${isGoogleSignIn ? "google-sign-in" : null}
     custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

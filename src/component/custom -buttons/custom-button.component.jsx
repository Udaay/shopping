import React from "react";
// import "./custom-button.styles.scss";
import CustomButtonStyle from "./custom-button.styled.component";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonStyle {...props}>{children}</CustomButtonStyle>
);

export default CustomButton;

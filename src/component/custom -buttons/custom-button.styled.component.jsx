import styled, { css } from "styled-components";

const BaseStyle = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const GoogleStyle = css`
  color: white;
  background-color: #4285f4;

  &:hover {
    background-color: #1669f2;
  }
`;

const InvertedStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const setButtonStyles = (props) => {
  if (props.isGoogleSignIn) return GoogleStyle;
  return props.inverted ? InvertedStyle : BaseStyle;
};

const CustomButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  min-width: 165px;
  width: auto;
  border: none;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-weight: bolder;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 10px;
  ${setButtonStyles}
`;

export default CustomButtonStyle;

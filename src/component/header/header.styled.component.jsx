import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  height: 70px;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

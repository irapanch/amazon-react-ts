import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 306px;
  min-height: 100vh;
  padding-top: 36px;
  padding-left: 28px;
  background-color: gray;
  font-size: 20px;
`;
export const StyledLogo = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 11px 5px 11px 11px;
  list-style: none;
  text-decoration: none;
  font-weight: 500;
  line-height: 21px;
  color: black;
  border-radius: 7px;
  font-size: 24px;

  &:hover,
  &:focus,
  &.active {
    background-color: lightblue;
    color: darkblue;
  }
`;
export const StyledNavLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 11px 5px 11px 11px;
  /* font-size: 14px; */
  font-weight: 500;
  line-height: 21px;
  color: black;
  border-radius: 7px;

  &:hover,
  &:focus,
  &.active {
    background-color: lightblue;
    color: darkblue;
  }
`;

export const LinkWrapper = styled.div`
  width: 250px;
  margin-bottom: 17px;
  border-radius: 7px;
`;

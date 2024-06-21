import { FC } from "react";

import {
  HeaderContainer,
  LinkWrapper,
  StyledLogo,
  StyledNavLink,
} from "./Header.styled.tsx";
export const Header: FC = () => {
  return (
    <HeaderContainer>
      <nav>
        <LinkWrapper>
          <StyledLogo to="/">
            <span>Home</span>
          </StyledLogo>
        </LinkWrapper>
        <LinkWrapper>
          <StyledNavLink to="/about">
            <span>About us</span>
          </StyledNavLink>
        </LinkWrapper>
        <LinkWrapper>
          <StyledNavLink to="/dashboard">
            <span>Dashboard</span>
          </StyledNavLink>
        </LinkWrapper>
      </nav>
    </HeaderContainer>
  );
};

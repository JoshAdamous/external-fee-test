import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon, Avatar } from './';

const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.offBlack};
`;

const Logo = styled.div`
  position: absolute;
  top: 16px;

  @media (max-width: 680px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    flex-direction: row;
    width: 100%;
  }
`;

const NavItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 6rem;
  height: 6rem;
  opacity: 0.28;
  transition: all 0.22s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (max-width: 680px) {
    flex: 1;
    width: initial;
  }

  &:is(:hover, :focus) {
    scale: 1.05;
    opacity: 1;
  }

  &.active {
    pointer-events: none;
    opacity: 1;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      width: 6px;
      height: 28px;
      background-color: ${({ theme }) => theme.brand};
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;

      @media (max-width: 680px) {
        left: initial;
        bottom: 16px;
        width: 28px;
        height: 4px;
        border-radius: 6px;
      }
    }
  }

  &.user-profile {
    opacity: 0.8;

    &:is(:hover, :focus) {
      opacity: 1;
    }
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Logo>
        <Icon title="logo" />
      </Logo>

      <Nav>
        <NavItem to="/">
          <Icon title="home" />
        </NavItem>
        <NavItem to="/discover">
          <Icon title="discover" />
        </NavItem>
        <NavItem to="/notifications">
          <Icon title="notifications" />
        </NavItem>
        <NavItem to="/menu">
          <Icon title="menu" />
        </NavItem>
        <NavItem to="/profile" className="user-profile">
          <Avatar>
            <img src="../assets/images/user_profile.png" alt="User profile" />
          </Avatar>
        </NavItem>
      </Nav>
    </StyledNavbar>
  );
}

export default Navbar;

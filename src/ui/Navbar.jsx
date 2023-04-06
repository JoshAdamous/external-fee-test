import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Icon, Avatar } from './';
import { useIsMobile } from '../hooks';

const StyledNavbar = styled(motion.div)`
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
    scale: 1.08;
    opacity: 1;
  }

  &.active {
    pointer-events: none;
    opacity: 1;
    scale: 1 !important;

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

    &.active {
      opacity: 1;
    }

    &:is(:hover, :focus) {
      opacity: 1;
    }
  }
`;

const navbarVariants = {
  hidden: (isMobile) => ({
    x: isMobile ? 0 : -100,
    y: isMobile ? -100 : 0,
    opacity: 0,
  }),
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
  },
};

function Navbar() {
  const isMobile = useIsMobile();
  const navbarAnimation = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      navbarAnimation.start('visible');
    }, 50);
  }, []);

  return (
    <StyledNavbar
      custom={isMobile}
      animate={navbarAnimation}
      initial="hidden"
      variants={navbarVariants}
      transition={{ duration: 0.44, type: 'spring', stiffness: 36 }}
    >
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
            <img
              src="https://joshadamous.github.io/external-fee-test/assets/images/user_profile.png"
              alt="User profile"
            />
          </Avatar>
        </NavItem>
      </Nav>
    </StyledNavbar>
  );
}

export default Navbar;

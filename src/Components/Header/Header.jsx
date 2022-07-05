import React, { useState } from 'react';
import styled from 'styled-components';
import PersonalLogo from './PersonalLogo';
import HamburgerButton from './HamburgerButton';
import breakpoints from '../../constants/breakpoints';
import AsideNav from './AsideNav';
import NavBar from './NavBar';

const { laptop } = breakpoints;
const Header = () => {
  const [isOpenAsideNav, setIsOpenAsideNav] = useState(false);
  const state = { isOpenAsideNav, setIsOpenAsideNav };


  return (
    <HeaderWrapper>
      <PersonalLogo />
      <HamburgerButton {...state} />
      <AsideNav {...state} />
      <NavBarWrapper children={<NavBar />} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0px;
  z-index: 10;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--primaryBg);
  box-shadow: 0px 2px 50px #8888;

  @media screen and (min-width: ${laptop}) {
    & .hamburger {
      display: none;
    }

    padding-inline: 100px;
  }
`;

const NavBarWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${laptop}) {
    display: flex;
    height: max-content;
    width: max-content;
    align-self: center;
  }
`;

export default Header;

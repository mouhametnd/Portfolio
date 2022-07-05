import React from 'react';
import styled from 'styled-components';
import FindMe from '../Others/FindMe';
import NavBar from './NavBar';

const AsideNav = ({ isOpenAsideNav, setIsOpenAsideNav }) => {
  const handleClick = ({ target }) => target.tagName === 'A' && setIsOpenAsideNav(false);

  return (
    <RootWrapper isOpenAsideNav={isOpenAsideNav}>
      <NavBarWrapper onClick={handleClick}>
        <NavBar flexDirection={'column'} />
      </NavBarWrapper>

      <FindMeWrapper>
        <FindMe />
      </FindMeWrapper>
    </RootWrapper>
  );
};

const RootWrapper = styled.aside`
  position: fixed;
  top: 82px;
  left: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  width: 100%;
  height: calc(100% - 82px);
  padding: 20px;
  background-color: var(--primaryBg);
  transition: clip-path 0.4s ease-in-out;
  clip-path: circle(0% at 0% 0%);
  clip-path: ${({ isOpenAsideNav }) => isOpenAsideNav && 'circle(150% at 0% 0%)'};
`;

const NavBarWrapper = styled.div`
  height: 43%;
  text-align: center;
  display: flex;
  & ul {
    margin-inline: auto;
    width: max-content;
  }

  & a {
    font-size: 17.6px;
  }
`;

const FindMeWrapper = styled.div`
  width: max-content;
  margin-inline: auto;
  text-align: center;
`;

export default AsideNav;

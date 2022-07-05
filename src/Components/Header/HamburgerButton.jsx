import React from 'react';
import styled from 'styled-components';
import '../../css/hamburger.css';

const HamburgerButton = ({ setIsOpenAsideNav, isOpenAsideNav }) => {
  const handleClick = () => setIsOpenAsideNav(prev => !prev);

  return (
    <Button
      onClick={handleClick}
      className={`hamburger hamburger--emphatic  ${isOpenAsideNav && 'is-active'}`}
      type="button"
    >
      <span className="hamburger-box hamburger__span">
        <span className="hamburger-inner hamburger__span"></span>
      </span>
    </Button>
  );
};

const Button = styled.button`
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  transition: 0.2s linear opacity;
  cursor: pointer;

  @media screen and (hover: hover) {
    &:hover {
      opacity: 0.7;
    }
  }

  & * {
    pointer-events: none;
  }

  .hamburger {
    &-inner {
      background-color: var(--limeGreen);
      &::after,
      &::before {
        background-color: var(--limeGreen);
      }
    }
  }
`;

export default HamburgerButton;

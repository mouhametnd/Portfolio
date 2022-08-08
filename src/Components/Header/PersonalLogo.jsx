import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/icons/logo.webp';

const PersonalLogo = () => (
  <RootWrapper>
    <img src={logo} alt="logo" />
    <span>MOUHAMET NDIAYE</span>
  </RootWrapper>
);

const RootWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;

  & img {
    width: 40px;
    height: 40px;
    align-self: center;
  }

  & span {
    font-family: var(--primaryFont);
    width: 180px;
    color: var(--lightBlack);
    font-size: clamp(1.2rem, 1.5vw, 2rem);
    font-weight: 900;
    background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147));
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export default PersonalLogo;

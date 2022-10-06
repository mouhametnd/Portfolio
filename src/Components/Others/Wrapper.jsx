import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
const { xl } = breakpoints;

const Wrapper = ({ children }) => <RootWrapper children={children} />;

const RootWrapper = styled.main`
  padding: 20px 20px 100px 20px;
  @media screen and (min-width: ${xl}) {
    padding-inline: 70px;
  }
`;

export default Wrapper;
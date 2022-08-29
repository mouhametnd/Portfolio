import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
const { laptop } = breakpoints;

const Wrapper = ({ children }) => <RootWrapper children={children} />;

const RootWrapper = styled.main`
  padding: 20px 20px 100px 20px;
  @media screen and (min-width: ${laptop}) {
    padding-inline: 70px;
  }
`;

export default Wrapper;
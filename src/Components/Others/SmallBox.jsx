import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
const { md } = breakpoints;

const SmallBox = ({ children, dataTitle }) => <SmallBoxWrapper children={children} data-title={dataTitle} className="smallbox"/>;

const SmallBoxWrapper = styled.li`
  width: 60px;
  width: max-content;
  padding: 13px;
  margin: 0px;
  list-style: none;
  border-radius: 6px;
  background: var(--whiteBoxGradient);
  box-shadow: var(--whiteShadow);

  @media screen and (min-width: ${md}) {
    padding: 17px;
  }
`;

export default SmallBox;

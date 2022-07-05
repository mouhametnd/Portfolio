import React from 'react';
import styled from 'styled-components';

const PSection = ({ children }) => <P children={children} />;

const P = styled.p`
  padding: 0px;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: 0.6px;
  line-height: 150%;
  font-family: var(--secondaryFont);
  color: var(--lightBlack);
`;

export default PSection;

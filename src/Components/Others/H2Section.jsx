import React from 'react';
import styled from 'styled-components';

const H2Section = ({ children }) => <H2 children={children} />;

const H2 = styled.h3`
  color: var(--lightBlack);
  font-size: clamp(1.9rem, 3.5vw, 5rem);
  text-align: center;
  text-transform: capitalize;
`;

export default H2Section;

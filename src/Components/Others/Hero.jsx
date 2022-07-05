import React from 'react';
import styled from 'styled-components';
import FindMe from './FindMe';

const Hero = () => {
  return (
    <RootWrapper id='home'>
      <h1>
        Hi, I’m <GreenSpan>Mouhamet Ndiaye</GreenSpan> a Frontend Developer
      </h1>

      <p>
        I’m a frontend developer with a passion for creating beautiful and functional user interfaces. I’m currently
        learning <GreenSpan>typescript</GreenSpan>.
      </p>

      <FindMe />
    </RootWrapper>
  );
};

const RootWrapper = styled.section`
  padding-top: 60px;
  display: flex;
  flex-flow: column;
  gap: 50px;


  & h1 {
    color: var(--primaryBlack);
    font-size: clamp(1.8rem, 6.2vw, 2.7rem);
    max-width: 600px;
  }

  & p {
    padding: 0px;
    margin: 0px;
    color: var(--secondaryBlack);
    font-size: clamp(1.3rem, 3.2vw, 1.5rem);
    font-family: var(--secondaryFont);
    max-width: 800px;
    line-height: 155%;
    letter-spacing: 0.6px;
  }
`;

const GreenSpan = styled.span`
  color: var(--limeGreen);
`;

export default Hero;

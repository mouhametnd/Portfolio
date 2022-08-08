import React from 'react';
import styled from 'styled-components';
import FindMe from './FindMe';
import portalBg from '../../assets/images/portal-bg.webp';

const Hero = () => {
  return (
    <RootWrapper id="home">
      <ContentWrapper>
        <h1>
          Hi, I’m <GreenSpan>Mouhamet Ndiaye</GreenSpan> a Frontend Developer
        </h1>

        <p>

          I’m a frontend developer with a passion for creating beautiful and functional user interfaces using new tools. In this portfolio, You'll finde a collection of some of my projects, there is a live demo and  source code of each project. If you want to know more about me, you can find me on <GreenSpan>Github</GreenSpan> or <GreenSpan>Linkedin</GreenSpan>. 
        </p>


        <FindMe />
      </ContentWrapper>
        <Img src={portalBg} />
    </RootWrapper>
  );
};

const RootWrapper = styled.section`
  padding-top: 60px;
  display: flex;
  flex-flow: column;
  flex-flow: row nowrap;
  gap: 50px;

  & h1 {
    color: var(--primaryBlack);
    font-size: clamp(1.8rem, 6.2vw, 2.7rem);
    max-width: 600px;
  }

  & p {
    padding: 0px;
    margin: 0px;
    padding-block: 20px;
    color: var(--secondaryBlack);
    font-size: clamp(.9rem, 3.2vw, 1.18rem);
    font-family: var(--secondaryFont);
    max-width: 800px;
    line-height: 155%;
    letter-spacing: 0.6px;
  }
`;

const ContentWrapper = styled.div``;

const Img = styled.img`
  display: none;

  @media screen and (min-width: 1324px) {
    display: inline;
    max-width: 600px;
    max-height: 400px;
    border-radius: 10px;

  }
`;

const GreenSpan = styled.span`
  color: var(--limeGreen);
`;

export default Hero;

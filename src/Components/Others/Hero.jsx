import React from 'react';
import styled from 'styled-components';
import FindMe from './FindMe';
import portalBg from '../../assets/images/portal-bg.webp';

const Hero = () => {
  return (
    <RootWrapper id="home">
      <ContentWrapper>
        <h1>
          Hi, I’m <GreenSpan>Mouhamet Ndiaye</GreenSpan> a Full-stack Developer
        </h1>

        <p>
          A full-stack developer who loves to overcome himself through learning new technologies and building things
          that live on the internet.
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

  a {
    text-decoration: none;
  }

  & .span-separator {
    margin: 0 10px;
  }

  & p {
    padding: 0px;
    margin: 0px;
    padding-block: 20px;
    color: var(--secondaryBlack);
    font-size: clamp(0.9rem, 3.2vw, 1.18rem);
    font-family: var(--secondaryFont);
    max-width: 800px;
    line-height: 160%;
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

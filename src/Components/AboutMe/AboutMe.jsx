import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import FindMe from '../Others/FindMe';
import H2Section from '../Others/H2Section';
import PSection from '../Others/PSection';
import meImage from '../../assets/images/me.webp';

const { tablet } = breakpoints;

const AboutMe = () => {
  return (
    <section id="aboutme">
      <H2Section children="About Me" />

      <MainWrapper>
        <ContentWrapper>
          <PSection>
            I'm a frontend developer with a passion for creating beautiful and functional websites with new tools. I'm
            currently learning new tools and also I'm looking for a job as a frontend developer.
          </PSection>
          <FindMe />
        </ContentWrapper>
        <img src={meImage} alt="Man Foto" />
      </MainWrapper>
    </section>
  );
};

const MainWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  display: grid;
  gap: 20px;

  & img {
    padding-top: 10px;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 300px;
    object-fit: cover;
    margin-inline: auto;
  }

  @media screen and (min-width: ${tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 400px;
  margin-inline: auto;

  & p {
    text-align: left;
  }
`;

export default AboutMe;

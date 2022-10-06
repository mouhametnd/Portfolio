import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import FindMe from '../Others/FindMe';
import H2Section from '../Others/H2Section';
import PSection from '../Others/PSection';
import meImage from '../../assets/images/me.webp';

const { md, sm } = breakpoints;

const AboutMe = () => {
  return (
    <section id="aboutme">
      <H2Section children="About Me" />

      <MainWrapper>
        <ContentWrapper>
          <PSection>
            I’m a passionate self-taught full-stack web developer. I love to build things that live on the internet,
            with a focus on creating scalable and beautiful web applications. I specialize in building (and occasionally
            designing) websites and applications. I take great care in the experience, architecture, and code quality of
            the things I build. I’m currently available for work.
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
    max-height: 400px;
    object-fit: cover;
    margin-inline: auto;
    border-radius: 50%;
    overflow: hidden;
  }

  @media screen and (min-width: ${md}) {
    grid-template-columns: 1fr 1fr;
    max-width: 1000px;
  }
  @media screen and (max-width: 450px) {
    & img {
      margin-top: 100px;
    }
  }
  @media screen and (max-width: 330px) {
    & img {
      margin-top: 150px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 300px;
  margin: auto;

  & * {
    margin: auto;
  }

  & p {
    text-align: left;

  }

  @media screen and (max-width: 450px) {
    & p {
      margin-bottom: 30px;
    }
  }
`;

export default AboutMe;

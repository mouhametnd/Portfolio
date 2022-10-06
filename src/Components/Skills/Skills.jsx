import React from 'react';
import styled from 'styled-components';
import H2Section from '../Others/H2Section';
import PSection from '../Others/PSection';
import Skill from './Skill';

const Skills = ({ title, description, skillsValues }) => {
  return (
    <RootWrapper id="skills">
      <H2Section children={title} />
      <PSection>{description}</PSection>

      <ContentWrapper isFrontendSkills={title === 'Frontend Skills'}>
        {skillsValues.map((value, i) => (
          <Skill {...value} key={i} />
        ))}
      </ContentWrapper>
    </RootWrapper>
  );
};

const RootWrapper = styled.section`
  & img {
    width: 35px;
    height: 35px;
    object-fit: contain;
    margin-inline: auto;
  }

  & span {
    font-family: var(--secondaryFont);
    font-size: 0.9rem;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;

  @media screen and (max-width: 768px) {
    gap: 25px;
  }

  @media screen and (min-width: 1124px) {
    display: flex;
    justify-content: space-evenly;
    ${({ isFrontendSkills }) => {
      return (
        isFrontendSkills &&
        `& article:nth-child(2) ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr)`
      );
    }}
  }
`;

export default Skills;

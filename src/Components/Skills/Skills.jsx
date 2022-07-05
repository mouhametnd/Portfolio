import React from 'react';
import styled from 'styled-components';
import arraySkills from '../../constants/arraySkills';
import H2Section from '../Others/H2Section';
import PSection from '../Others/PSection';
import SmallBox from '../Others/SmallBox';

const Skills = () => {
  return (
    <section id='skills'>
      <H2Section children={'Skills'} />
      <PSection>These are some tools that I can implement in projects.</PSection>

      <UL>
        {arraySkills.map(({ icon, name }) => (
          <SmallBox key={icon + name}>
            <img src={icon} alt={name} loading="lazy" />
            <span> {name}</span>
          </SmallBox>
        ))}
      </UL>
    </section>
  );
};

const UL = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 20px;

  & li {
    display: flex;
    flex-flow: column nowrap;
    gap: 10px;
    padding: 13px;
  }

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

export default Skills;

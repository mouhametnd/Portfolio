import React from 'react';
import styled from 'styled-components';
import SmallBox from '../Others/SmallBox';

const Skill = ({ title, skills }) => {
  return (
    <RootWrapper>
      <h4>{title}</h4>

      <ContentWrapper>
        {skills.map(({ icon, name }) => (
          <SmallBox key={icon + name}>
            <img src={icon} alt={name} loading="lazy" />
            <span> {name}</span>
          </SmallBox>
        ))}
      </ContentWrapper>
    </RootWrapper>
  );
};

const RootWrapper = styled.article`
  width: max-content;

  & h4 {
    color: var(--lightBlack);
    font-family: var(--primaryFont);
    padding-right: 10px;
    letter-spacing: 0.7px;
    text-align: center;
    padding-block: 20px;
    font-size: 1.2rem;
  }
`;

const ContentWrapper = styled.ul`
  display: flex;
  flex-flow: column;
  gap: 20px;
  padding: 0px;
  margin: 0px;

  width: max-content;
  margin-inline: auto;

  & .smallbox {
    display: grid;
    gap: 10px;
    width: 185px;
    grid-template-columns: 40px 1fr;

    & span {
      margin-block: auto;
      font-weight: 500;
    }
  }
`;

export default Skill;

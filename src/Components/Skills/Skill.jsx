import React from 'react';
import styled from 'styled-components';
import arraySkills from '../../constants/arraySkills';
import filteredByType from '../../functions/filteredByType';

const Skill = ({ title, type }) => {
  return (
    <RootWrapper>
      <h4>{title}</h4>

      <ContentWrapper>{filteredByType(type)}</ContentWrapper>
    </RootWrapper>
  );
};

const RootWrapper = styled.article`
  width: max-content;

  & h4 {
    color: var( --lightBlack);
    font-family: var(--primaryFont);
    padding-right: 10px;
    letter-spacing: 0.7px;
    text-align: center;
    padding-block: 20px;
    font-size: 1.2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;

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

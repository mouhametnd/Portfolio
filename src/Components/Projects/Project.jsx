import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import SmallBox from '../Others/SmallBox';
const { tablet } = breakpoints;


const Project = ({ id, title, description, technologies, github, liveDemo, image, gif }) => {
  const handleMouseOver = ({ currentTarget }) => (currentTarget.querySelector('img').src = gif);
  const handleMouseLeave = ({ currentTarget }) => (currentTarget.querySelector('img').src = image);

  return (
    <RootWrapper onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <img loading="lazy" src={image} alt={title} />

      <MainWrapper>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>Technologies</h4>
        <Ul>
          {technologies.map(tech => (
            <SmallBox key={tech + id}>
              <span>{tech}</span>
            </SmallBox>
          ))}
        </Ul>
      </MainWrapper>

      <LinksWrapper>
        <a href={liveDemo} target="_blank" noopener="true" children="Live demo" />
        <a href={github} target="_blank" noopener="true" children="Source Code" />
      </LinksWrapper>
    </RootWrapper>
  );
};

const RootWrapper = styled.article`
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  padding-bottom: 25px;
  background: var(--whiteBoxGradient);
  box-shadow: var(--whiteShadow);

  & img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    height: 200px;
    @media screen and (min-width: ${tablet}) {
      height: 220px;
    }
  }

  & h3 {
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    color: var(--lightBlack);
    letter-spacing: 1px;
  }

  & h4 {
    letter-spacing: 0.8px;
    color: var(--lightBlack);
  }

  & p {
    padding: 0px;
    margin: 0px;
    font-size: 1rem;
    line-height: 150%;
    color: var(--lightBlack);
    font-family: var(--secondaryFont);
  }

  & a {
    padding: 12px;
    border-radius: 20px;
    font-family: var(--secondaryFont);
    background-color: var(--darkBlack);
    color: var(--white);
    transition: 0.5s linear background, color 0.5s linear;

    @media screen and (hover: hover) {
      &:hover {
        background: var(--whiteBoxGradient);
        box-shadow: var(--whiteShadow);
        color: var(--lightBlack);
      }
    }
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
  text-align: center;
  padding: 25px;
`;

const Ul = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  list-style: none;
  font-family: var(--secondaryFont);
`;

const LinksWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-inline: 25px;
`;
export default Project;

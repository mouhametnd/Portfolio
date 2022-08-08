import React from 'react';
import styled from 'styled-components';
import SmallBox from './SmallBox';
import GithubSvg from '../../assets/svgs/GithubSvg';
import LinkedinSvg from '../../assets/svgs/LinkedinSvg';

const FindMe = () => {
  return (
    <RootWrapper>
      <h3>Find Me</h3>
      <Ul>
        <SmallBox dataTitle="Github">
          <a href="https://github.com/mouhametnd" target="_blank" noopener="true" children={<GithubSvg />} />
        </SmallBox>
        <SmallBox dataTitle="Linkedin">
          <a
            href="https://www.linkedin.com/in/mouhametnd/"
            target="_blank"
            noopener="true"
            children={<LinkedinSvg />}
          />
        </SmallBox>
      </Ul>
    </RootWrapper>
  );
};

const RootWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  margin: 0px;
  padding: 0px;
  width: max-content;

  & li {
    position: relative;
    cursor: pointer;
    transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
    padding: 0px;

    @media screen and (hover: hover) {
      &:hover {
        background: var(--greenGradient);
        transform: translateY(-5px);

        &::before {
          content: attr(data-title);
          position: absolute;
          top: -30px;
          left: -3px;
          padding: 5px;
          width: max-content;
          text-align: center;
          background-color: var(--darkBlack);
          color: var(--white);
          border-radius: 3px;
          font-family: var(--secondaryFont);
          font-size: 14.4px;
          letter-spacing: 1px;
        }

        & svg {
          stroke: var(--white);
        }
      }
    }

    & a {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 20px;

    }

    & span {
      font-size: 0.9rem;
      font-family: var(--secondaryFont);
    }

    & svg {
      margin: auto;
      stroke: var(--darkBlack);
      transition: stroke 0s linear;
    }
  }
`;

export default FindMe;

import React from 'react';
import styled from 'styled-components';
import arrayLinks from '../../constants/arrayLinks';

const NavBar = ({ flexDirection }) => {
  return (
    <Ul flexDirection={flexDirection}>
      {arrayLinks.map(({ title, link }) => (
        <li key={link}>
          <a href={link}>{title}</a>
        </li>
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: space-evenly;
  height: 100%;
  gap: 30px;
  width: 100%;
  padding: 0px;
  margin: 0px;

  & li {
    list-style: none;
    width: max-content;
    height: max-content;

    @media screen and (hover: hover) {
      &:hover {
        & a {
          color: var(--limeGreen);
        }
      }
    }
  }

  & a {
    padding: 5px;
    font-family: var(--secondaryFont);
    font-weight: 600;
    color: var(--darkBlack);
    text-decoration: none;
    transition: 0.2s linear color;
  }
`;

export default NavBar;

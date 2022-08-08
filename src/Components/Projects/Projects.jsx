import React from 'react';
import styled from 'styled-components';
import H2Section from '../Others/H2Section';
import PSection from '../Others/PSection';
import Project from './Project';
import arrayProjects from '../../constants/arrayProjects';

const Projects = () => {
  return (
    <section id="projects">
      <H2Section children={'Projects'} />
      <PSection>
        Here are some of my projects, if you want to see more please visit my Github repository{' '}
        <AElement
          href="https://github.com/mouhametnd?tab=repositories"
          target="_blank"
          noopener="true"
          children="here"
        />
        .
      </PSection>

      <ProjectsWrapper>
        {arrayProjects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </ProjectsWrapper>
    </section>
  );
};

const AElement = styled.a`
  color: var(--limeGreen);
`;

const ProjectsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
`;

export default Projects;

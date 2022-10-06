import React from 'react';
import Wrapper from './Components/Others/Wrapper';
import Header from './Components/Header/Header';
import Hero from './Components/Others/Hero';
import Projects from './Components/Projects/Projects';
import HrElement from './Components/Others/HrElement';
import AboutMe from './Components/AboutMe/AboutMe';
import FrontendSkills from './Components/Skills/FrontendSkills';
import BackendSkills from './Components/Skills/BackendSkills';

function App() {
  return (
    <>
    <Header />
      <Wrapper>
        <Hero />
        <HrElement />
        <Projects />
        <HrElement />
        <FrontendSkills/>
        <HrElement />
        <BackendSkills/>
        <HrElement />
        <AboutMe />
      </Wrapper>
    </>
  );
}

export default App;

import React from 'react';
import Wrapper from './Components/Others/Wrapper';
import Header from './Components/Header/Header';
import Hero from './Components/Others/Hero';
import Projects from './Components/Projects/Projects';
import HrElement from './Components/Others/HrElement';
import Skills from './Components/Skills/Skills';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <>
    <Header />
      <Wrapper>
        <Hero />
        <HrElement />
        <Projects />
        <HrElement />
        <Skills />
        <HrElement />
        <AboutMe />
      </Wrapper>
    </>
  );
}

export default App;

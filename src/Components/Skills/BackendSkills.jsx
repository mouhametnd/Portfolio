import React from 'react';
import { backendSkillsValues } from '../../constants/backendSkills';
import Skills from './Skills';

const skillsProp = {
  title: 'Backend Skills',
  description: 'These are the backend skills that I have acquired and can implement in projects.',
  skillsValues: backendSkillsValues,
};


const BackendSkills =  () => <Skills {...skillsProp} />;

export default BackendSkills
import React from 'react';
import { frontendSkillsValues } from '../../constants/frontendSkills';
import Skills from './Skills';

const skillsProp = {
  title: 'Frontend Skills',
  description: 'These are the frontend skills that I have acquired and can implement in projects.',
  skillsValues: frontendSkillsValues,
};

const FrontendSkills = () => <Skills {...skillsProp} />;

export default FrontendSkills;

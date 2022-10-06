import nodejsIcon from '../assets/icons/nodejs.webp';
import expressjsIcon from '../assets/icons/expressjs.webp';
import mongodbIcon from '../assets/icons/mongodb.webp';
import jwtIcon from '../assets/icons/jwt.webp';
import ajvIcon from '../assets/icons/ajv.webp';
import mongooseIcon from '../assets/icons/mongodb.webp';
import ejsIcon from '../assets/icons/ejs.webp';

const backendSkills = {
  languages: {
    title: 'Languages',
    skills: [
      {
        name: 'Nodejs',
        icon: nodejsIcon,
      },
    ],
  },
  frameworks: {
    title: 'Frameworks',
    skills: [
      {
        name: 'Expressjs  ',
        icon: expressjsIcon,
      },
    ],
  },
  database: {
    title: 'Database',
    skills: [
      {
        name: 'Mongodb',
        icon: mongodbIcon,
      },
    ],
  },

  libraries: {
    title: 'Libraries And Tools',
    skills: [
      { name: 'JWT-token', icon: jwtIcon },
      { name: 'Mongoose', icon: mongooseIcon },
      { name: 'AJV-validator', icon: ajvIcon },
      { name: 'EJS-engine', icon: ejsIcon },
    ],
  },
};

export const backendSkillsValues = Object.values(backendSkills);

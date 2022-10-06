import htmlIcon from '../assets/icons/html.webp';
import cssIcon from '../assets/icons/css.webp';
import jsIcon from '../assets/icons/javascript.webp';
import reactJSIcon from '../assets/icons/react-js.webp';
import reduxIcon from '../assets/icons/redux.webp';
import styledIcon from '../assets/icons/styled-components.webp';
import sassIcon from '../assets/icons/sass.webp';
import githubIcon from '../assets/icons/github.webp';
import reactRouterIcon from '../assets/icons/react-router.webp';
import gitIcon from '../assets/icons/git.webp';
import tsIcon from '../assets/icons/ts.png';
import tailwindIcon from '../assets/icons/tailwind.webp';
import npmIcon from '../assets/icons/npm.webp';
import angularIcon from '../assets/icons/angular.ico';
import rxjsIcon from '../assets/icons/rxjs.ico';
import ngrxIcon from '../assets/icons/ngrx.svg';

const frontendSkills = {
  languages: {
    title: 'Languages',
    skills: [
      {
        name: 'TypeScript',
        icon: tsIcon,
      },
      {
        name: 'JavaScript',
        icon: jsIcon,
      },
      {
        name: 'HTML',
        icon: htmlIcon,
      },
    ],
  },
  frameworksAndLibraries: {
    title: 'Frameworks And Libraries',
    skills: [
      {
        name: 'React.js',
        icon: reactJSIcon,
      },
      {
        name: 'Angular',
        icon: angularIcon,
      },
      {
        name: 'Redux/Toolkit',
        icon: reduxIcon,
      },
      {
        name: 'NgRx',
        icon: ngrxIcon,
      },
      {
        name: 'React Router',
        icon: reactRouterIcon,
      },
      {
        name: 'RxJS',
        icon: rxjsIcon,
      },
    ],
  },
  styles: {
    title: 'Styles',
    skills: [
      {
        name: 'CSS',
        icon: cssIcon,
      },
      {
        name: 'Tailwind CSS',
        icon: tailwindIcon,
      },
      {
        name: 'SASS/SCSS',
        icon: sassIcon,
      },
      {
        name: 'Styled-components',
        icon: styledIcon,
      },
    ],
  },
  tools: {
    title: 'Tools',
    skills: [
      {
        name: 'GIT',
        icon: gitIcon,
      
      },
      {
        name: 'Github',
        icon: githubIcon,
      
      },
      {
        name: 'NPM',
        icon: npmIcon,
      
      },
    ],
  },
};


export const frontendSkillsValues = Object.values(frontendSkills);
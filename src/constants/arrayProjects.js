import gamesImage from '../assets/images/games-app-img.webp';
import moviesImage from '../assets/images/movies-app-img.webp';
import githubImage from '../assets/images/github-dev-finder-img.webp';
import modernWebsiteImg from '../assets/images/modern-website.png';
import inMarkdownImage from '../assets/images/in-browser-markdown-editor-img.webp';
import productFbImage from '../assets/images/product-feedback-img.png';

import gamesGif from '../assets/gifs/games-app-gif.webp';
import moviesGif from '../assets/gifs/movies-app-gif.webp';
import githubGif from '../assets/gifs/github-dev-finder-gif.webp';
import inMarkdownGif from '../assets/gifs/in-browser-markdown-editor-gif.gif';
import productFbGif from '../assets/gifs/product-feedback-gif.gif';

('which you can use to write markdown and preview it in the browser, there are some interesting interactions.');

const arrayProjects = [
  {
    id: 1,
    title: 'In-browser markdown editor Web App',
    description:
      'This is an in-browser markdown editor, which allow user to write markdown, preview it in the browser, create, delete, update, copy, download files etc.',
    technologies: ['TypeScript', 'React.js', 'Tailwind CSS', 'Redux Toolkit'],
    github: 'https://github.com/mouhametnd/react-browser-markdown-editor',
    liveDemo: 'https://mouhametnd-markdown-editor.netlify.app/',
    image: inMarkdownImage,
    gif: inMarkdownGif,
  },
  {
    id: 2,
    title: 'Games Web App',
    description: 'An interesting and interactive games web app using React and an API. With many interactive features.',
    technologies: ['React.js', 'Axios', 'Redux Toolkit', 'React Router', 'Styled-components'],
    github: 'https://github.com/mouhametnd/Games-Web-App',
    liveDemo: 'https://mouhametnd-games-app.netlify.app/',
    image: gamesImage,
    gif: gamesGif,
  },
  {
    id: 3,
    title: 'Product Feedback Web App',
    technologies: ['Angular', 'RxJs', 'NgRx', 'Tailwind CSS'],
    description: 'This is a Product Feedback web app with many interactions that the user can play with.',
    github: 'https://github.com/mouhametnd/angular-product-feedback-app',
    liveDemo: 'https://mouhametnd-product-feedback.netlify.app/#/',
    image: productFbImage,
    gif: productFbGif,
  },
  {
    id: 4,
    title: 'Movies Web App',
    description:
      'A movies app that allows users to search, filter and add games as a favourite, watch and watch later using JavaScript and an API.',
    technologies: ['JavaScript', 'Gulp', 'SASS/SCSS'],
    github: 'https://github.com/mouhametnd/Movies-Web-App',
    liveDemo: 'https://mouhametnd-movies-app.netlify.app/',
    image: moviesImage,
    gif: moviesGif,
  },
  {
    id: 5,
    title: 'Github Dev Finder',
    description: 'A web app that allows users to search for Github users with an autocomplete search.',
    technologies: ['React.js', 'styled-components'],
    github: 'https://mouhametnd-games-app.netlify.app/',
    liveDemo: 'https://github.com/mouhametnd/React-Github-Dev-Finder-Web-App',
    image: githubImage,
    gif: githubGif,
  },
  {
    id: 6,
    title: 'Modern Website',
    description:
      'A modern website focused on UI/UX, animations, and interactions.',
    technologies: ['React', 'Styled-components',  'SCSS/SASS',],
    github: 'https://github.com/mouhametnd/future-fasanara',
    liveDemo: 'https://mouhametnd-fasanara.netlify.app/',
    image: modernWebsiteImg,
    gif: modernWebsiteImg,
  },
];

export default arrayProjects;

import gamesImage from '../assets/images/games-app-img.webp';
import moviesImage from '../assets/images/movies-app-img.webp';
import githubImage from '../assets/images/github-dev-finder-img.webp';
import memoryImage from '../assets/images/memory-game-img.webp';
import pomodoroImage from '../assets/images/pomodoro-app-img.webp';
import inMarkdownImage from '../assets/images/in-browser-markdown-editor-img.webp';

import gamesGif from '../assets/gifs/games-app-gif.webp';
import moviesGif from '../assets/gifs/movies-app-gif.webp';
import githubGif from '../assets/gifs/github-dev-finder-gif.webp';
import memoryGif from '../assets/gifs/memory-game-gif.webp';
import pomodoroGif from '../assets/gifs/pomodoro-app-gif.webp';
import inMarkdownGif from '../assets/gifs/in-browser-markdown-editor-gif.gif';

'which you can use to write markdown and preview it in the browser, there are some interesting interactions.'

const arrayProjects = [
  {
    id: 1,
    title: 'In-browser markdown editor App',
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
    id: 4,
    title: 'Github Dev Finder',
    description: 'A web app that allows users to search for Github users with an autocomplete search.',
    technologies: ['React.js', 'styled-components'],
    github: 'https://mouhametnd-games-app.netlify.app/',
    liveDemo: 'https://github.com/mouhametnd/React-Github-Dev-Finder-Web-App',
    image: githubImage,
    gif: githubGif,
  },
  {
    id: 5,
    title: 'Pomodoro Web App',
    description:
      'A Pomodoro web app that allows users to start, pause and cancel many timers. With a custom set of colours and fonts for the app.',
    technologies: ['JavaScript', 'Gulp', 'SASS/SCSS'],
    github: 'https://github.com/mouhametnd/Pomodoro-App',
    liveDemo: 'https://mouhametnd-pomodoro.netlify.app/',
    image: pomodoroImage,
    gif: pomodoroGif,
  },
  {
    id: 5,
    title: 'Memory Game',
    description:
      'A memory game that allows users to play with cards and try to find matching pairs. With a custom set of players, the number of grids and the icons or numbers to match.',
    technologies: ['JavaScript', 'SASS/SCSS'],
    github: 'https://github.com/mouhametnd/Games-Web-App',
    liveDemo: 'https://mouhametnd-memory-game.netlify.app/',
    image: memoryImage,
    gif: memoryGif,
  },
];

export default arrayProjects;

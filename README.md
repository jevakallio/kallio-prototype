# kallio-prototype

Prototype for Helsinki-based city adventure game

## Requirements

### [Node.js](https://nodejs.org)

The application should work on any relatively modern version of node (tested on 12.x and 14.x).

The recommended way to install and manage Node versions is with [Node Version Manager](https://github.com/nvm-sh/nvm):

1. [Install nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Run `nvm install 14` to install latest version Node 14.x
3. Run `nvm use 14` to enable Node 14.x in current shell session
4. Run `node -v` to verify that the expected version of Node is running

## Development

### Install dependencies

Before first build, run the following command to download the project's dependencies (defined in [package.json](package.json)).

```sh
npm install
```

### Build

This application is built with React. This means the source code needs to be compiled from the React JSX syntax to vanilla JavaScript syntax that browsers understand.

Run:

```sh
npm run build
```

This generates an `dist/app.js` bundle, which contains all the necessary JavaScript to run the app.

### Build automatically on change

The bundle needs to be regenerated every time you change any code. Instead of running `npm run build` manually on every change, you can run the `watch` command to start a file watcher, which will rebuild the application bundle after every change:

```sh
npm run watch
```

### Run the application

After the application is built, you can load the `index.html` as if it were any website. The easiest way is to run the `start` command, which will serve the site at http://localhost:3003.

```sh
npm start
```

Alternatively, you can configure your favorite web server (Apache, nginx, etc) to serve the project root directory.

## Code overview

### Stack

The application is written in an Extremely 2016 fashion, using the following tools:

- [React](https://reactjs.org/) 0.13.x
  - Unfortunately, this version is now so old, that the project's docsite doesn't host documentation it anymore. The [React Legacy docs](https://react-legacy.netlify.app/) are the closest available.
- [Redux](https://redux.js.org/) 1.x
- [Immutable.js](https://github.com/immutable-js/immutable-js)

### Areas of interest

- Level data: [src/data/levels.js](src/data/levels.js)
- Game logic: [src/redux/store.js](src/redux/store.js)
- Game state: [src/utils/game-state.js](src/utils/game-state.js)
  - Game progress is persisted as a URL hash, so you can save your progress by bookmarking the current URL
  - **NOTE** that this persists the entire current level data, including level descriptions, answers, etc. In retrospect, was an unfortunate design choice, as it means that when developing the app in watch mode, any changes to current level data are not reflected, and you need to start the game from scratch to see changes to level data.
- Visual styling
  - Built upon [Skeleton CSS boilerplate](http://getskeleton.com/)
  - General app styles in [styles/app.css](styles/app.css)
  - Screen-specific styles defined in each UI component (see `const styles = {...}`) at the bottom of file

## License

[MIT](LICENSE)

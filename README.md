# kallio-prototype

Prototype for Helsinki-based city adventure game

## Requirements

### Node 12.x or older

This project requires an older version of Node.js due to outdated build dependencies (`chokidar@2` and `fswatch@1`).

The easiest way to manage multiple Node versions is with [Node Version Manager](https://github.com/nvm-sh/nvm):

1. [Install nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Run `nvm install 12` to install latest version Node 12.x
3. Run `nvm use 12` to enable Node 12.x in current shell session

Alternatively, you ca

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

### Files of interest

- Level data: [src/data/levels.js](src/data/levels.js)
- Game logic: [src/redux/store.js](src/redux/store.js)

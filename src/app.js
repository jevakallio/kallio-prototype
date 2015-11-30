'use strict';

const React = require('react');
const {Provider, connect} = require('react-redux');

const MainView = require('./components/main-view');
const store = require('./redux/store');
const gameState = require('./util/game-state');

function startGame() {

  // pass store state and action creators to main view
  const actions = require('./redux/actions');
  const props = state => state.toJS();

  // bind main view to store instance
  const ReduxConnectedMainView = connect(props, actions)(MainView);
  const renderer = () => <ReduxConnectedMainView />;
  const target = document.getElementById('blackout-app');

  React.render(<Provider store={store}>{renderer}</Provider>, target);
}

// initialize landing page
let startButton = document.querySelector('.landing-page .start-game');
if (gameState.hasSavedState()) {
  startButton.textContent = 'Continue Game';
}

startButton.addEventListener('click', () => {
  document.querySelector('.landing-page').style.display = 'none';
  startGame();
});

'use strict';

const Redux = require('redux');
const gameState = require('../util/game-state');
const AnswerStatus = require('../enums/answer-status');

function mutate(state, action) {
  switch(action.type) {
    case 'SET_LEVEL':
      return state
        .set('answer', null)
        .merge(action.level);
    case 'CHANGE_ANSWER_STATUS':
      return state
        .set('answer', 'answer' in action ? action.answer : state.get('answer'))
        .set('answerStatus', action.answerStatus);
    case 'FINISHED':
      // hack, @TODO move page into the react scope
      document.querySelector('.stay-tuned-page').style.display = 'block';
      return state;
    default:
      return state;
  }
}

function next(state, action) {

  if(action.type === '@@redux/INIT') {
    return gameState.load() || gameState.getInitialState();
  }

  let nextState = mutate(state, action);
  gameState.save(nextState);
  return nextState;
}

module.exports = Redux.createStore(next);

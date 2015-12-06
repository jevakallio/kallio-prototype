'use strict';

const Redux = require('redux');
const gameState = require('../util/game-state');
const AnswerStatus = require('../enums/answer-status');

function mutate(state, action) {
  switch(action.type) {
    case 'SET_LEVEL':
      return state
        .set('answerStatus', AnswerStatus.UNANSWERED)
        .set('answer', '')
        .set('showWayHint', false)
        .set('showDetailHint', false)
        .merge(action.level);
    case 'CHANGE_ANSWER_STATUS':
      return state
        .set('answer', 'answer' in action ? action.answer : state.get('answer'))
        .set('answerStatus', action.answerStatus);
    case 'SHOW_HINT_SCREEN': {
      return state.set('showHintScreen', true);
    }

    case 'HIDE_HINT_SCREEN': {
      return state.set('showHintScreen', false);
    }

    case 'SHOW_WAY_HINT': {
      return state
        .set('showWayHint', true)
        .set('wayHintLifelineUsed', true);
    }
    case 'SHOW_DETAIL_HINT': {
      return state
        .set('showDetailHint', true)
        .set('detailHintLifelineUsed', true);
    }

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

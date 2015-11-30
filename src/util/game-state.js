'use strict';

const Immutable = require('immutable');
const levels = require('../data/levels');
const AnswerStatus = require('../enums/answer-status');

module.exports = {
  save,
  load,
  hasSavedState,
  getInitialState
};

// serialize state to url anchor (url encode to avoid base64 charset limitations)
function save(state) {
  let serialized = btoa(window.unescape(encodeURIComponent(JSON.stringify(state))));
  history.replaceState(null, null, '#' + serialized);
}

// read state from url anchor
function load() {
  let serialized = window.location.hash.substring(1);
  if (serialized) {
    try {
      let state = JSON.parse(decodeURIComponent(window.escape(atob(serialized))));
      return toImmutable(state);
    }
    catch (e) {
      console.error('Failed to parse saved game state', e);
    }
  }

  return null;
}

function hasSavedState() {
  return load() !== null;
}

function getInitialState() {
  return toImmutable({
    ...levels[0],
    levelIndex: 0,
    answer: '',
    answerStatus: AnswerStatus.UNANSWERED
  });
}

function toImmutable(state) {
  return Immutable
    .Map(state);
    //.set('inventory', Immutable.List.of(...state.inventory || []));
}

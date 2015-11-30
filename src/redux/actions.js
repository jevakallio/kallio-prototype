'use strict';
let levels = require('../data/levels');
let analytics = require('../util/analytics');
let AnswerStatus = require('../enums/answer-status');

module.exports = {
  setLevel(levelId) {

    let nextLevelId = levelId + 1;
    let level = levels[nextLevelId];
    if(!level) {
      throw new Error('No known level ' + levelId);
    }
    return {
      type: 'SET_LEVEL',
      level
    };
  },

  resetLevel() {
    return {
      type: 'CHANGE_ANSWER_STATUS',
      answerStatus: AnswerStatus.UNANSWERED,
      answer: ''
    };
  },

  answered(levelId, answer) {
    analytics.addEvent({
      event: 'attemptAnswer',
      level: levelId
    });
    return {
      type: 'CHANGE_ANSWER_STATUS',
      answerStatus: AnswerStatus.CHECKING,
      answer: answer
    };
  },

  answeredCorrectly(levelId) {
    analytics.addEvent({
      event: 'rightAnswer',
      level: levelId
    });

    if (levels[levelId + 1]) {
      return {
        type: 'CHANGE_ANSWER_STATUS',
        answerStatus: AnswerStatus.CORRECT
      };
    }

    return {type: 'FINISHED'};
  },

  answeredIncorrectly(levelId) {
    analytics.addEvent({
      event: 'wrongAnswer',
      level: levelId
    });

    return {
      type: 'CHANGE_ANSWER_STATUS',
      answerStatus: AnswerStatus.INCORRECT
    };
  }
};

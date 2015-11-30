'use strict';

const React = require('react');
const ClueView = require('./clue-view');
const AnswerView = require('./answer-view');
const InputView = require('./input-view');
const AnswerStatus = require('../enums/answer-status');

const {number, func, string, bool, array, object, oneOf} = React.PropTypes;
const values = obj => Object.keys(obj).map(key => obj[key]);

const MainView = React.createClass({
  displayName: 'MainView',
  propTypes: {

    // state
    levelIndex: string.isRequired,
    levelTitle: string.isRequired,
    levelClue: string.isRequired,
    levelExplanation: string.isRequired,
    levelAnswer: string.isRequired,
    levelAnswerIsExact: bool.isRequired,

    // transient state
    answer: string,
    answerStatus: oneOf(values(AnswerStatus)),

    //actions
    answered: func.isRequired,
    answeredCorrectly: func.isRequired,
    answeredIncorrectly: func.isRequired,
    setLevel: func.isRequired,
    resetLevel: func.isRequired
  },
  render() {
    const {levelIndex, levelClue, levelAnswer, levelExplanation, levelAnswerIsExact} = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <ClueView
            levelIndex={levelIndex}
            levelClue={levelClue}
            />
        </div>
        <div className='row'>
          <InputView
            levelAnswer={levelAnswer}
            levelAnswerIsExact={levelAnswerIsExact}
            onAnswer={answer => this.props.answered(levelIndex, answer)}
            onCorrectAnswer={() => this.props.answeredCorrectly(levelIndex)}
            onWrongAnswer={() => this.props.answeredIncorrectly(levelIndex)}
            />
        </div>
        <AnswerView
          levelIndex={levelIndex}
          levelExplanation={levelExplanation}
          answer={this.props.answer}
          answerStatus={this.props.answerStatus}
          nextLevel={() => this.props.setLevel(levelIndex + 1)}
          resetLevel={() => this.props.resetLevel()}
          />
      </div>
    );
  }
});

const styles = {
  closeInventoryButton: {
    marginTop: '30px',
    display: 'inline-block'
  }
}
module.exports = MainView;

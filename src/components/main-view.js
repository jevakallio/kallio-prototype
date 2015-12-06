'use strict';

const React = require('react');
const ClueView = require('./clue-view');
const AnswerView = require('./answer-view');
const InputView = require('./input-view');
const HintView = require('./hint-view');
const AnswerStatus = require('../enums/answer-status');

const {number, func, string, bool, array, object, oneOf} = React.PropTypes;
const values = obj => Object.keys(obj).map(key => obj[key]);

const MainView = React.createClass({
  displayName: 'MainView',
  propTypes: {

    // state
    levelIndex: number.isRequired,
    levelName: string.isRequired,
    levelClue: string.isRequired,
    levelExplanation: string.isRequired,
    levelAnswer: string.isRequired,
    levelAnswerIsExact: bool.isRequired,
    levelWayHint: string.isRequired,
    levelDetailHint: string.isRequired,
    showHintScreen: bool.isRequired,
    showWayHint: bool.isRequired,
    showDetailHint: bool.isRequired,

    // transient state
    answer: string,
    answerStatus: oneOf(values(AnswerStatus)),

    //actions
    answered: func.isRequired,
    answeredCorrectly: func.isRequired,
    answeredIncorrectly: func.isRequired,
    setLevel: func.isRequired,
    displayHints: func.isRequired,
    hideHints: func.isRequired,
    resetLevel: func.isRequired,
    requestWayHint: func.isRequired,
    requestDetailHint: func.isRequired
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
            levelIndex={levelIndex}
            levelAnswer={levelAnswer}
            levelAnswerIsExact={levelAnswerIsExact}
            onAnswer={answer => this.props.answered(levelIndex, answer)}
            onCorrectAnswer={() => this.props.answeredCorrectly(levelIndex)}
            onWrongAnswer={() => this.props.answeredIncorrectly(levelIndex)}
            displayHints={this.props.displayHints}
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
        <HintView
          levelWayHint={this.props.levelWayHint}
          levelDetailHint={this.props.levelDetailHint}
          wayHintLifelineUsed={this.props.wayHintLifelineUsed}
          detailHintLifelineUsed={this.props.detailHintLifelineUsed}
          showHintScreen={this.props.showHintScreen}
          showWayHint={this.props.showWayHint}
          showDetailHint={this.props.showDetailHint}
          requestWayHint={this.props.requestWayHint}
          requestDetailHint={this.props.requestDetailHint}
          hideHints={this.props.hideHints}
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

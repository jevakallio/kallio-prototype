
'use strict';
const _ = require('lodash');
const React = require('react');
const {string, func, bool, number} = React.PropTypes;
const answerUtil = require('../util/answer-util');

const KEY_ENTER = 13;

const InputView = React.createClass({
  displayName: 'InputView',
  propTypes: {

    // state
    levelIndex: number.isRequired,
    levelAnswer: string.isRequired,
    levelAnswerIsExact: bool.isRequired,

    //actions
    onAnswer: func.isRequired,
    onCorrectAnswer: func.isRequired,
    onWrongAnswer: func.isRequired
  },

  getInitialState() {
    return {
      showError: false,
      showSuccess: false,
      value: ''
    };
  },

  componentWillReceiveProps(next) {
    if(next.levelIndex !== this.props.levelIndex) {
      this.setState({
        value: ''
      });
    }
  },

  onKeyUp() {
    this.setState({
      showError: false,
      showSuccess: false
    });
  },

  onKeyPress(e) {
    if(e.which === KEY_ENTER) {
      this.checkAnswer(e.target.value);
    }
  },

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  },


  checkAnswer(answer) {

    this.props.onAnswer(answer);

    let isCorrect = answerUtil.check(answer, this.props.levelAnswer, this.props.levelAnswerIsExact);
    if (isCorrect) {
      setTimeout(() => this.props.onCorrectAnswer(answer), 1000);
    } else {
      setTimeout(() => this.props.onWrongAnswer(answer), 1000);
    }
  },

  render() {

    let inputStyle = styles.answerInput;
    if (this.state.showError) {
      inputStyle = _.extend({}, inputStyle, {
        color: 'white',
        backgroundColor: 'hsl(347, 91%, 29%)'
      });
    }

    if(this.state.showSuccess) {
      inputStyle = _.extend({}, inputStyle, {
        color: 'white',
        backgroundColor: '#04AB00'
      });
    }

    return (
      <div style={styles.container} className='answer-container'>
        <label htmlFor='answer'>Answer</label>
        <input
          name='answer'
          type='text'
          value={this.state.value}
          onKeyUp={this.onKeyUp}
          onKeyPress={this.onKeyPress}
          onChange={this.onChange}
          style={inputStyle}>
        </input>
      </div>
    );
  }
});

const styles = {
  container: {

  },
  answerInput: {
    color: '#222',
    width: '95%'
  }
};

module.exports = InputView;

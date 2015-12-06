
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
    onWrongAnswer: func.isRequired,
    displayHints: func.isRequired
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
    let fakeProgressDuration = 4000 + (Math.floor(Math.random() * 1000));
    if (isCorrect) {
      setTimeout(() => this.props.onCorrectAnswer(answer), fakeProgressDuration);
    } else {
      setTimeout(() => this.props.onWrongAnswer(answer), fakeProgressDuration);
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
        <div style={styles.inputContainer}>
          <label htmlFor='answer'>Answer</label>
          <input
            name='answer'
            type='text'
            value={this.state.value}
            onKeyUp={this.onKeyUp}
            onKeyPress={this.onKeyPress}
            onChange={this.onChange}
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            style={inputStyle}>
          </input>
        </div>
        <div style={styles.buttoniContainer}>
          <button
            onClick={this.props.displayHints}
            className='stealth-button'
            style={styles.hint}>
            I need help!
          </button>
          <button
            onClick={() => this.checkAnswer(this.state.value)}
            disabled={!this.state.value}
            className='submit-button'
            style={styles.submit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
});

const styles = {
  container: {

  },
  answerInput: {
    color: '#222',
    width: '100%'
  },
  inputContainer: {
    width: '50vh'
  },
  buttoniContainer: {
    textAlign: 'center'
  },
  hint: {
    float: 'left'
  },
  submit: {
    float: 'right'
  }
};

module.exports = InputView;

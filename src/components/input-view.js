
'use strict';
const _ = require('lodash');
const React = require('react');
const {string, func, bool} = React.PropTypes;
const KEY_ENTER = 13;

const InputView = React.createClass({
  displayName: 'InputView',
  propTypes: {

    // state
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

    let attempt = answer.trim().toLowerCase();
    let expected = this.props.levelAnswer.toLowerCase();

    let correct = this.props.levelAnswerIsExact
      ? attempt === expected
      : attempt.indexOf(expected) !== -1;

    if (correct) {
      setTimeout(() => this.props.onCorrectAnswer(attempt), 2000);
      // this.setState({
      //   showSuccess: true
      // });
    } else {
      setTimeout(() => this.props.onWrongAnswer(attempt), 2000);
      // this.setState({
      //   showError: true
      // });
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
      <div className='answer-container'>
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
  answerInput: {
    color: '#222',
    width: '95%',
    marginRight: '5%'
  }
};

module.exports = InputView;

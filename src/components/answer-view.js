
'use strict';
const _ = require('lodash');
const React = require('react');
const AnswerStatus = require('../enums/answer-status');

const {string, func, bool, any} = React.PropTypes;
const AnswerView = React.createClass({
  displayName: 'AnswerView',
  propTypes: {
    levelExplanation: string.isRequired,
    answer: string.isRequired,
    answerStatus: string.isRequired,

    nextLevel: func.isRequired,
    resetLevel: func.isRequired
  },

  render() {
    let status = this.props.answerStatus;
    if (status === AnswerStatus.UNANSWERED) {
      return null;
    }

    return (
      <div style={styles.overlay}>
        {status === AnswerStatus.CHECKING &&
          <div style={styles.loadingIndicator}>
            <img src='assets/dashinfinity.gif' />
            <div>Checking...</div>
          </div>
        }
        {status === AnswerStatus.CORRECT &&
          <div style={styles.correctContainer}>
            <div style={styles.correct}>RIGHT!</div>
            <div style={styles.explanation}>
              {this.props.levelExplanation}
            </div>
            <button onClick={this.props.nextLevel}>
              Next level
            </button>
          </div>
        }
        {status === AnswerStatus.INCORRECT &&
          <div style={styles.incorrectContainer}>
            <div style={styles.incorrect}>WRONG</div>
            <button onClick={this.props.resetLevel}>
              Try again
            </button>
          </div>
        }
      </div>
    );
  }
});

const styles = {
  overlay: {
    top: 0,
    left: 0,
    zindex: 998,
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white'
  },
  loadingIndicator: {
    textAlign: 'center',
    height: '40vh',
    marginTop: '30vh'
  },

  correctContainer: {
    textAlign: 'center'
  },
  correct: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '40px',
    color: 'green'
  },

  explanation: {
    textAlign: 'left',
    padding: '2vh 10vw 5vh 10vw'
  },

  incorrectContainer: {
    textAlign: 'center',
    height: '40vh',
    marginTop: '35vh'
  },
  incorrect: {
    fontWeight: 'bold',
    fontSize: '40px',
    color: 'red',
    paddingBottom: '5vh'
  }
};

module.exports = AnswerView;


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
          <div style={styles.loadingIndicator}>Checking...</div>
        }
        {status === AnswerStatus.CORRECT &&
          <div style={styles.loadingIndicator}>
            <div>CORRECT</div>
            <button onClick={this.props.nextLevel}>
              Next level
            </button>
          </div>
        }
        {status === AnswerStatus.INCORRECT &&
          <div style={styles.loadingIndicator}>
            <div>INCORRECT</div>
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
    marginTop: '48vh'
  }
};

module.exports = AnswerView;

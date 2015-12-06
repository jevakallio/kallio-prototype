'use strict';

const React = require('react');
const {string} = React.PropTypes;

const ClueView = React.createClass({
  displayName: 'ClueView',
  propTypes: {
    // state
    levelClue: string.isRequired
  },
  render() {
    return (
      <div className='clue-container'>
        <div style={styles.levelNumber}>
          <span style={styles.circle}>
            {this.props.levelIndex + 1}
          </span>
        </div>
        <p style={styles.clue}>{this.props.levelClue}</p>
      </div>
    );
  }
});

const styles = {
  circle: {
    display: 'inline-block',
    height: '40px',
    width: '40px',
    fontSize: '24px',
    fontWeight: 'bold',
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white'
  },
  levelNumber: {
    margin: '20px',
    textAlign: 'center'
  },
  clue: {
    padding: '0px 20px',
    fontSize: '20px'
  }
};

module.exports = ClueView;

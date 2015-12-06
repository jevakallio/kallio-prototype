'use strict';

const React = require('react');
const {string, bool, func} = React.PropTypes;

const HintView = React.createClass({
  displayName: 'HintView',
  propTypes: {
    levelWayHint: string.isRequired,
    levelDetailHint: string.isRequired,
    wayHintLifelineUsed: bool.isRequired,
    detailHintLifelineUsed: bool.isRequired,
    showHintScreen: bool.isRequired,
    showWayHint: bool.isRequired,
    showDetailHint: bool.isRequired,
    requestWayHint: func.isRequired,
    requestDetailHint: func.isRequired,
    hideHints: func.isRequired
  },

  renderHintText(text) {
    return <div style={styles.hintText}>{text}</div>;
  },

  renderHintButton(text, callback, lifelineUsed) {
    return (
      <div style={styles.hintButtonContainer}>
        <div style={styles.hintHeading}>{text}</div>
        <button className='red-button' style={styles.hintButton} onClick={callback}>
          Reveal hint
        </button>
        {lifelineUsed
          ? <div style={styles.hintPenaltyWarning}>
              Using this hint will cost you a 10 minute penalty!
            </div>
          : <div style={styles.hintLifelineOffer}>
              The first hint is for free, but the next one will cost you a 10 minute penalty!
            </div>
        }


      </div>
    )
  },


  render() {
    if(!this.props.showHintScreen) {
      return null;
    }

    return (
      <div style={styles.overlay}>
        <div style={styles.hintContainer}>
          {this.props.showWayHint
            ? this.renderHintText(this.props.levelWayHint)
            : this.renderHintButton(
              `I need a hint to find the place`,
              this.props.requestWayHint,
              this.props.wayHintLifelineUsed)
          }
        </div>
        <div style={styles.hintContainer}>
          {this.props.showDetailHint
            ? this.renderHintText(this.props.levelDetailHint)
            : this.renderHintButton(
              `I think I'm in the right place, but I need help figuring out the clue`,
              this.props.requestDetailHint,
              this.props.detailHintLifelineUsed)
          }
        </div>

        <button style={styles.cancelButton} onClick={this.props.hideHints}>
          {`Go back to clue`}
        </button>
      </div>
    );
  }
});

const styles = {

  overlay: {
    top: 0,
    left: 0,
    zindex: 999,
    position: 'absolute',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'white'
  },

  hintButton: {
    width: '100%',
    marginTop: '2vh',
    marginBottom: '2vh'
  },

  cancelButton: {
    width: '80vw',
    margin: '2vh 10vw'
  },

  hintContainer: {
    border: '1px solid #ccc',
    width: '80vw',
    minHeight: '30vh',
    margin: '3vh 5vw',
    padding: '3vh 5vw',
  },

  hintButtonContainer: {

  },

  hintHeading: {
    fontWeight: 'bold',
    fontSize: '110%'
  },

  hintText: {

  },

  hintPenaltyWarning: {
    color: 'red',
    fontSize: '12px',
  },

  hintLifelineOffer: {
    color: 'green',
    fontSize: '12px'
  },

  clue: {
    padding: '0px 20px',
    fontSize: '20px'
  }
};

module.exports = HintView;

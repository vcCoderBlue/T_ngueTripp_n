import React, { Component } from 'react';

class Vitals extends Component {

  render() {
    return (
      <div className="vitals">
        Vitals: <br />
        Life: {this.props.life} <br />
        Score: {this.props.score} <br />
        Level: {this.props.level}
      </div>
    );
  }
}

export default Vitals;

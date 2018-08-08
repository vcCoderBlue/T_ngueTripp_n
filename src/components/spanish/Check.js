import React, { Component } from 'react';

function Font1() {
  return (
    <i class="fa fa-thumbs-o-up fa-3x"></i>
  )
}

function Font2() {
  return (
    <i class="fa fa-arrow-right fa-2x"></i>
  )
}

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkLink: props.initialCheck,
      value: ''
  };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.unmountMe();
  }

  render() {
    return (
      <div className="container">
        <br />
        <Font1 /> <br /><br />
        Keep Going!
        <br /> <br />
        <div className="continue" onClick={this.onClick}>
          <Font2 />
        </div>
      </div>
    );
  }
}

export default Check;

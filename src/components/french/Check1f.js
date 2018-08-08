import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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

class Check1f extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toHome: false
    };

    this.onClick =this.onClick.bind(this);
  };

  onClick() {
    this.setState({toHome: true})
  }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to='/T_ngueTripp_n/' />
    }

    return (
      <div className="container">
        <br />
        <Font1 /> <br /><br />
        Practice makes perfect!
        <br /> <br />
        <div className="continue" onClick={this.onClick}>
          <Font2 />
        </div>
      </div>
    );
  }
}

export default Check1f;

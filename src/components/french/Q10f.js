import React from 'react';

class Q10f extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q10fLink: props.initialQ10f,
      value: ''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.plusScore = this.plusScore.bind(this);
    this.minusLife = this.minusLife.bind(this);
  }

  plusScore() {
    this.props.addScore();
  }

  minusLife() {
    this.props.removeLife();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value === "I am ..." | this.state.value === "i am ...") {
      this.props.plusScore();
      alert ("CORRECT! +25 points");
    } else {
      this.props.minusLife();
      alert ("Incorrect, the answer is 'I am ...' -25 life");
    }
    this.props.unmountMe();
  }

  render() {
    return (
      <div>
        <div>
          <h3> Question 10 </h3>
          Je suis ...
        </div>
          <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Translate text to English: <br />
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Q10f;

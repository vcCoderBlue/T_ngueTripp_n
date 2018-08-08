import React from 'react';

class Q10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q10Link: props.initialQ10,
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
    if (this.state.value === "What's your name?" | this.state.value === "What is your name?") {
      this.props.plusScore();
      alert ("CORRECT! +25 points");
    } else {
      this.props.minusLife();
      alert ("Incorrect, the answer is 'What's your name?' -25 life");
    }
    this.props.unmountMe();
  }

  render() {
    return (
      <div>
        <div>
          <h3> Question 10 </h3>
          ¿Cómo se llama usted?
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

export default Q10;

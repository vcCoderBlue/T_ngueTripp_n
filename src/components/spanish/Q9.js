import React from 'react';

class Q9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q9Link: props.initialQ9,
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
    if (this.state.value === "How much does it cost?" | this.state.value === "how much does it cost") {
      this.props.plusScore();
      alert ("CORRECT! +25 points");
    } else {
      this.props.minusLife();
      alert ("Incorrect, the answer is 'How much does it cost?' -25 life");
    }
    this.props.unmountMe();
  }

  render() {
    return (
      <div>
        <div>
          <h3> Question 9 </h3>
          ¿Cuánto cuesta?
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

export default Q9;

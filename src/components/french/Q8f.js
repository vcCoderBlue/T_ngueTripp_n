import React from 'react';

class Q8f extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Where is the bathroom?",
      q8fLink: props.initialQ8f
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
    if (this.state.value === "How much does it cost?" | this.state.value === "How much does it cost?") {
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
          <h3> Question 8 </h3>
          Combien ça coûte?
        </div> <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Select the correct translation: <br />
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Again, please.">Again, please.</option>
              <option value="Where is the bathroom?">Where is the bathroom?</option>
              <option value="How much does it cost?">How much does it cost?</option>
              <option value="Hello, How are you?">Hello, How are you?</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
 export default Q8f;

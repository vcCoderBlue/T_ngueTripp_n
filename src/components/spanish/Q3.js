import React from 'react';

class Q3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Where is the bathroom?",
      q3Link: props.initialQ3
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
    if (this.state.value === "Sorry, I don't understand." | this.state.value === "Sorry, I do not understand.") {
      this.props.plusScore();
      alert ("CORRECT! +25 points");
    } else {
      this.props.minusLife();
      alert ("Incorrect, the answer is 'Sorry, I don't understand.' -25 life");
    }
    this.props.unmountMe();
  }

  render() {
    return (
      <div>
        <div>
          <h3> Question 3 </h3>
          Lo siento, no entiendo.
        </div> <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Select the correct translation: <br />
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Again, please.">Again, please.</option>
              <option value="Where is the bathroom?">Where is the bathroom?</option>
              <option value="Sorry, I don't understand.">Sorry, I do not understand.</option>
              <option value="Hello, How are you?">Hello, How are you?</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
 export default Q3;

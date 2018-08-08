import React from 'react';

class Q4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'I am not a cat.',
      q4Link: props.initialQ4
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
    if (this.state.value === "Goodbye friends." | this.state.value === "Goodbye Friends") {
      this.props.plusScore();
      alert ("CORRECT! +25 points");
    } else {
      this.props.minusLife();
      alert ("Incorrect, the answer is 'Goodbye friends.' -25 life");
    }
    this.props.unmountMe();
  }

  render() {
    return (
      <div>
        <div>
          <h3> Question 4 </h3>
          Adios amigos.
        </div> <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Select the correct translation: <br />
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Where is the shoe store.">Where is the shoe store.</option>
              <option value="I am not a cat.">I am not a cat.</option>
              <option value="I am a cat.">I am a cat.</option>
              <option value="Goodbye friends.">Goodbye friends.</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
 export default Q4;

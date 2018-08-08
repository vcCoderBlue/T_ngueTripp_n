import React from 'react';

class Q7f extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'I am not a cat.',
      q7fLink: props.initialQ7f
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
    if (this.state.value === "More slowly, please." | this.state.value === "More slowly please") {
      this.props.plusScore();
      alert ("CORRECT! +25 points");
    } else {
      this.props.minusLife();
      alert ("Incorrect, the answer is 'More slowly, please.' -25 life");
    }
    this.props.unmountMe();
  }

  render() {
    return (
      <div>
        <div>
          <h3> Question 7 </h3>
          Plus lentement s’il vous plaît.
        </div> <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Select the correct translation: <br />
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="More carrots, please.">More carrots, please.</option>
              <option value="I am not a cat.">I am not a cat.</option>
              <option value="More slowly, please.">More slowly, please.</option>
              <option value="Goodbye friends.">Goodbye friends.</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
 export default Q7f;

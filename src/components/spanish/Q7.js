import React from 'react';

class Q7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Where...',
      q7Link: props.initialQ7
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
    if (this.state.value === "I am..." | this.state.value === "I am...") {
      this.props.plusScore();
      alert ("CORRECT! +25 points");
    } else {
      this.props.minusLife();
      alert ("Incorrect, the answer is 'I am...' -25 life");
    }
    this.props.unmountMe();
  }

  render() {
    return (
      <div>
        <div>
          <h3> Question 7 </h3>
          Soy...
        </div> <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Select the correct translation: <br />
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="There...">There...</option>
              <option value="Where...">Where...</option>
              <option value="I am...">I am ...</option>
              <option value="Here...">Here...</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
 export default Q7;

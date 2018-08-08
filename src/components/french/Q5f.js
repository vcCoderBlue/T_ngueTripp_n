import React from 'react';

class Q5f extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Where is the shoestore?',
      q5Link: props.initialQ5
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
    if (this.state.value === "Where is the bathroom?" | this.state.value === "Where is the bathroom.") {
      this.props.plusScore();
      alert ("CORRECT! +25 points");
    } else {
      this.props.minusLife();
      alert ("Incorrect, the answer is 'Where is the bathroom?' -25 life");
    }
    this.props.unmountMe();
  }

  render() {
    return (
      <div>
        <div>
          <h3> Question 5 </h3>
          Où se trouvent les toilettes?
        </div> <br />
        <form onSubmit={this.handleSubmit}>
              <div className="radio">
                <label>
                  <input type="radio" value="Where is the shoestore?"
                  checked={this.state.value === 'Where is the shoestore?'}
                  onChange={this.handleChange} />
                  Where is the shoestore?
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="Where is the bathroom?"
                  checked={this.state.value === 'Where is the bathroom?'}
                  onChange={this.handleChange}/>
                  Where is the bathroom?
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="I am not a horse."
                  checked={this.state.value === 'I am not a horse.'}
                  onChange={this.handleChange}/>
                  I am not a horse.
                </label>
              </div>
              <input type="submit" value="Submit" />
            </form>

      </div>
    );
  }
}
 export default Q5f;

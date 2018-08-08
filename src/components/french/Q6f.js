import React from 'react';

class Q6f extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Where is the zoo?',
      q6fLink: props.initialQ6f
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
    if (this.state.value === "What is your name?" | this.state.value === "What is your name?") {
      this.props.plusScore();
      alert ("CORRECT! +25 points");
    } else {
      this.props.minusLife();
      alert ("Incorrect, the answer is 'What is your name?' -25 life");
    }
    this.props.unmountMe();
  }

  render() {
    return (
      <div>
        <div>
          <h3> Question 6 </h3>
          Comment vous appelez-vous?
        </div> <br />
        <form onSubmit={this.handleSubmit}>
              <div className="radio">
                <label>
                  <input type="radio" value="Where is the zoo?"
                  checked={this.state.value === 'Where is the zoo?'}
                  onChange={this.handleChange} />
                  Where is the zoo?
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="Where is the car?"
                  checked={this.state.value === 'Where is the car?'}
                  onChange={this.handleChange}/>
                  Where is the car?
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="What is your name?"
                  checked={this.state.value === 'What is your name?'}
                  onChange={this.handleChange}/>
                  What is your name?
                </label>
              </div>
              <input type="submit" value="Submit" />
            </form>

      </div>
    );
  }
}
 export default Q6f;

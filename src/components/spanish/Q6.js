import React from 'react';

class Q6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'There is the shoestore.',
      q6Link: props.initialQ6
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
          <h3> Question 6 </h3>
          Más lento por favor.
        </div> <br />
        <form onSubmit={this.handleSubmit}>
              <div className="radio">
                <label>
                  <input type="radio" value="There is the shoestore."
                  checked={this.state.value === 'There is the shoestore.'}
                  onChange={this.handleChange} />
                  There is the shoestore.
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="More slowly, please."
                  checked={this.state.value === 'More slowly, please.'}
                  onChange={this.handleChange}/>
                  More slowly, please.
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="More food, thank you."
                  checked={this.state.value === 'More food, thank you.'}
                  onChange={this.handleChange}/>
                  More food, thank you.
                </label>
              </div>
              <input type="submit" value="Submit" />
            </form>

      </div>
    );
  }
}
 export default Q6;

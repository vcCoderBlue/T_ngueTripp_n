import React, { Component } from 'react';
import './App.css';

import Q1f from './components/french/Q1f';
import Q2f from './components/french/Q2f';
import Q3f from './components/french/Q3f';
import Q4f from './components/french/Q4f';
import Q5f from './components/french/Q5f';
import Checkf from './components/french/Checkf';
import Q6f from './components/french/Q6f';
import Q7f from './components/french/Q7f';
import Q8f from './components/french/Q8f';
import Q9f from './components/french/Q9f';
import Q10f from './components/french/Q10f';
import Check1f from './components/french/Check1f';
import Vitals from './components/Vitals';

class French extends Component {
  constructor(props){
        super(props)
        this.state = {
          renderQ1f: true,
          renderQ2f: false,
          renderQ3f: false,
          renderQ4f: false,
          renderQ5f: false,
          renderCheckf: false,
          renderQ6f: false,
          renderQ7f: false,
          renderQ8f: false,
          renderQ9f: false,
          renderQ10f: false,
          renderCheck1f: false,
          life: 250,
          score: 0,
          level: 1
        };
        this.handleQ1Unmount = this.handleQ1Unmount.bind(this);
        this.handleQ2Unmount = this.handleQ2Unmount.bind(this);
        this.handleQ3Unmount = this.handleQ3Unmount.bind(this);
        this.handleQ4Unmount = this.handleQ4Unmount.bind(this);
        this.handleQ5Unmount = this.handleQ5Unmount.bind(this);
        this.handleCheckUnmount = this.handleCheckUnmount.bind(this);
        this.handleQ6Unmount = this.handleQ6Unmount.bind(this);
        this.handleQ7Unmount = this.handleQ7Unmount.bind(this);
        this.handleQ8Unmount = this.handleQ8Unmount.bind(this);
        this.handleQ9Unmount = this.handleQ9Unmount.bind(this);
        this.handleQ10Unmount = this.handleQ10Unmount.bind(this);
        this.addScore = this.addScore.bind(this);
        this.removeLife = this.removeLife.bind(this);
    }
    handleQ1Unmount(){
        this.setState({renderQ1f: false, renderQ2f: true});
    }
    handleQ2Unmount(){
        this.setState({renderQ2f: false, renderQ3f: true});
    }
    handleQ3Unmount(){
        this.setState({renderQ3f: false, renderQ4f: true});
    }
    handleQ4Unmount(){
        this.setState({renderQ4f: false, renderQ5f: true});
    }
    handleQ5Unmount(){
        this.setState({renderQ5f: false, renderCheckf: true});
    }
    handleCheckUnmount(){
        this.setState({renderCheckf: false, renderQ6f: true});
    }
    handleQ6Unmount(){
        this.setState({renderQ6f: false, renderQ7f: true});
    }
    handleQ7Unmount(){
        this.setState({renderQ7f: false, renderQ8f: true});
    }
    handleQ8Unmount(){
        this.setState({renderQ8f: false, renderQ9f: true});
    }
    handleQ9Unmount(){
        this.setState({renderQ9f: false, renderQ10f: true});
    }
    handleQ10Unmount(){
        this.setState({renderQ10f: false, renderCheck1f: true});
    }
    addScore() {
        this.setState({score:this.state.score+=25});
    }

    removeLife() {
        this.setState({life:this.state.life-=25});
    }

  render() {
    return (
      <div className="App">
        <h3>French</h3>
        <div>
          <Vitals
            life={this.state.life}
            score={this.state.score}
            level={this.state.level}
            plusScore={this.addScore}
          />
        </div>
        {this.state.renderQ1f ? <Q1f
          plusScore={this.addScore}
          minusLife={this.removeLife}
          unmountMe={this.handleQ1Unmount}
        /> : null}
        {this.state.renderQ2f ? <Q2f
          plusScore={this.addScore}
          minusLife={this.removeLife}
          unmountMe={this.handleQ2Unmount}
        /> : null}
        {this.state.renderQ3f ? <Q3f
          unmountMe={this.handleQ3Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderQ4f ? <Q4f
          unmountMe={this.handleQ4Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderQ5f ? <Q5f
          unmountMe={this.handleQ5Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderCheckf ? <Checkf
          unmountMe={this.handleCheckUnmount}
        /> : null}
        {this.state.renderQ6f ? <Q6f
          unmountMe={this.handleQ6Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderQ7f ? <Q7f
          unmountMe={this.handleQ7Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderQ8f ? <Q8f
          unmountMe={this.handleQ8Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderQ9f ? <Q9f
          unmountMe={this.handleQ9Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderQ10f ? <Q10f
          unmountMe={this.handleQ10Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderCheck1f ? <Check1f /> : null}
      </div>
    );
  }
}

export default French;

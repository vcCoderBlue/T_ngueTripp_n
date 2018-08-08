import React, { Component } from 'react';
import './App.css';

import Q1 from './components/spanish/Q1';
import Q2 from './components/spanish/Q2';
import Q3 from './components/spanish/Q3';
import Q4 from './components/spanish/Q4';
import Q5 from './components/spanish/Q5';
import Check from './components/spanish/Check';
import Q6 from './components/spanish/Q6';
import Q7 from './components/spanish/Q7';
import Q8 from './components/spanish/Q8';
import Q9 from './components/spanish/Q9';
import Q10 from './components/spanish/Q10';
import Check1 from './components/spanish/Check1';
import Vitals from './components/Vitals';

class Spanish extends Component {
  constructor(props){
        super(props)
        this.state = {
          renderQ1: true,
          renderQ2: false,
          renderQ3: false,
          renderQ4: false,
          renderQ5: false,
          renderCheck: false,
          renderQ6: false,
          renderQ7: false,
          renderQ8: false,
          renderQ9: false,
          renderQ10: false,
          renderCheck1: false,
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
        this.setState({renderQ1: false, renderQ2: true});
    }
    handleQ2Unmount(){
        this.setState({renderQ2: false, renderQ3: true});
    }
    handleQ3Unmount(){
        this.setState({renderQ3: false, renderQ4: true});
    }
    handleQ4Unmount(){
        this.setState({renderQ4: false, renderQ5: true});
    }
    handleQ5Unmount(){
        this.setState({renderQ5: false, renderCheck: true});
    }
    handleCheckUnmount(){
        this.setState({renderCheck: false, renderQ6: true});
    }
    handleQ6Unmount(){
        this.setState({renderQ6: false, renderQ7: true});
    }
    handleQ7Unmount(){
        this.setState({renderQ7: false, renderQ8: true});
    }
    handleQ8Unmount(){
        this.setState({renderQ8: false, renderQ9: true});
    }
    handleQ9Unmount(){
        this.setState({renderQ9: false, renderQ10: true});
    }
    handleQ10Unmount(){
        this.setState({renderQ10: false, renderCheck1: true});
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
        <h3>Spanish</h3>
        <div>
          <Vitals
            life={this.state.life}
            score={this.state.score}
            level={this.state.level}
            plusScore={this.addScore}
          />
        </div>
        {this.state.renderQ1 ? <Q1
          plusScore={this.addScore}
          minusLife={this.removeLife}
          unmountMe={this.handleQ1Unmount}
        /> : null}
        {this.state.renderQ2 ? <Q2
          plusScore={this.addScore}
          minusLife={this.removeLife}
          unmountMe={this.handleQ2Unmount}
        /> : null}
        {this.state.renderQ3 ? <Q3
          unmountMe={this.handleQ3Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderQ4 ? <Q4
          unmountMe={this.handleQ4Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderQ5 ? <Q5
          unmountMe={this.handleQ5Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderCheck ? <Check
          unmountMe={this.handleCheckUnmount}
        /> : null}
        {this.state.renderQ6 ? <Q6
          plusScore={this.addScore}
          minusLife={this.removeLife}
          unmountMe={this.handleQ6Unmount}
        /> : null}
        {this.state.renderQ7 ? <Q7
          plusScore={this.addScore}
          minusLife={this.removeLife}
          unmountMe={this.handleQ7Unmount}
        /> : null}
        {this.state.renderQ8 ? <Q8
          unmountMe={this.handleQ8Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderQ9 ? <Q9
          unmountMe={this.handleQ9Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderQ10 ? <Q10
          unmountMe={this.handleQ10Unmount}
          plusScore={this.addScore}
          minusLife={this.removeLife}
        /> : null}
        {this.state.renderCheck1 ? <Check1 /> : null}
      </div>
    );
  }
}

export default Spanish;

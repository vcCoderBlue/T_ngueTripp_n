import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import Home from "./Home";
import Spanish from "./Spanish";
import French from "./French";
import Error from "./Error";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/T_ngueTripp_n/" component={Home} exact strict />
            <Route path="/T_ngueTripp_n/spanish" component={Spanish} />
            <Route path="/T_ngueTripp_n/french" component={French} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;

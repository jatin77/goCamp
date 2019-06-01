import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Intro from './components/intro/Intro';
import Building from './components/building/Building';
import Neighbourhood from './components/neighbourhood/Neighbourhood';
import Vision from './components/vision/Vision';
import Pursuit from './components/pursuit/Pursuit';
import Navbar from './components/navbar/Navbar';
import ToggleBtn from './components/toggle/ToggleBtn';
import HeaderMenu from './components/headerMenu/HeaderMenu';

class App extends Component {
  state = {
    show: false
  };

  activeToggle = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    return (
      <div className='App'>
        <ToggleBtn active={this.activeToggle} showToggle={this.state.show} />

        <Router>
          <Navbar showNav={this.state.show} />
          <Switch>
            <Route exact path='/' component={Intro} />
            <Route path='/building' component={Building} />
            <Route path='/neighbourhood' component={Neighbourhood} />
            <Route path='/vision' component={Vision} />
            <Route path='/pursuit' component={Pursuit} />
          </Switch>
        </Router>
        <HeaderMenu />
      </div>
    );
  }
}

export default App;

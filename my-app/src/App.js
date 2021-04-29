import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Counter from './components/Counter/Counter';
import Car from './components/Car/Car';
import Header from './components/Header/Header';
import './App.css';

export const ClickedContext = React.createContext(false);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    console.log(this.myRef)
    return (
      <Router>
        <div className='App'>
          <Header />
          <h1>111</h1>
          <Switch>
            <Route exact path='/' render={() => <h1>Hello!</h1>} />
            <Route path='/car' component={Car} />
            <Route path='/counter' component={Counter} />
          </Switch>
        </div>
      </Router>
    );
  }
}

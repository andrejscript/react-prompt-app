import React, { Component } from 'react';

export default class Counter extends Component {

  state = {
    score: 0
  }
   
  addCounter = () => {
    // this.setState({score: this.state.score + 1})
    this.setState((prevState) => ({
        score: prevState.score + 1
      }))
  }

render() {
  return (  
    <div style={{margin: '40px 0'}}>
    <h2>Counter {this.state.score}</h2>
      <button onClick={() => this.setState({score: this.state.score - 1}) }>-</button>
      <button onClick={this.addCounter}>+</button>
    </div>
    );
  }
}
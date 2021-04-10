import React, { Component } from 'react';

export default class Counter extends Component {

  state = {
    count: 0
  }
   
  addCount = () => {
    this.setState({count: this.state.count + 1})
  }

render() {
  return (  
    <div style={{margin: '40px 0'}}>
    <h2>Counter {this.state.count}</h2>
      <button onClick={() => this.setState({count: this.state.count - 1}) }>-</button>
      <button onClick={this.addCount}>+</button>
    </div>
    );
  }
}
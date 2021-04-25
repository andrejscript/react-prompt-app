import React, { Component } from 'react';
import Counter2 from '../Counter2/Counter2';

export default class Counter extends Component {
  state = {
    score: 0,
  };

  addCounter = () => {
    // this.setState({score: this.state.score + 1})
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  };

  render() {
    return (
      <div style={{ margin: '40px 0' }}>
        <h2>Counter {this.state.score}</h2>
        <Counter2 clicked={this.props.clicked} />
        <button onClick={() => this.setState({ score: this.state.score - 1 })}>
          -
        </button>
        <button onClick={this.addCounter}>+</button>
      </div>
    );
  }
}

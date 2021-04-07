import React, { Component } from 'react';
import Car from './Car';
import classes from './Content.module.css';

export default class Content extends Component {
  state = {
    cars: [
      { name: 'Mazda', year: 2014 },
      { name: 'Reno', year: 2016 },
      { name: 'BMW', year: 2019 },
    ],
    pageTitle: 'Main page title'
  };


  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (e) => {
    this.setState({
      pageTitle: e.target.value
    })
  }

  render() {
    const { cars } = this.state;

    return (
      <div className={classes.Content}>
        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput}/>
        <button onClick={this.changeTitleHandler.bind(this, 'change')}>Change title</button>


        <Car 
          name={cars[0].name} 
          year={cars[0].year}
          onChangeTtitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />


      </div>
    );
  }
}

import React, { Component } from 'react';
import Car from './components/Car/Car';
import './App.css';

export default class App extends Component {

  state = {
    cars: [
      { name: 'Mazda', year: 2014, id: 1 },
      { name: 'Reno', year: 2016, id: 2 },
      { name: 'BMW', year: 2019, id: 3 },
    ],
    pageTitle: 'Main page title',
    showCars: true
  };

  changeTitleHandler = () => {
    console.log(1)
  }

  render () {

    const {cars} = this.state;

    return (
      <div className="App">
        <Car name={cars[0].name} year={cars[0].year}/>
        <Car name={cars[1].name} year={cars[1].year}/>
        <Car name={cars[2].name} year={cars[2].year}/>

        <button onClick={this.changeTitleHandler}>Change</button>
      </div>
    )
  }
};
import React, { Component } from 'react';
import Car from './Car';
import classes from './Content.module.css';

export default class Content extends Component {
  state = {
    cars: [
      { name: 'Mazda', year: 2014, id: 1 },
      { name: 'Reno', year: 2016, id: 2 },
      { name: 'BMW', year: 2019, id: 3 },
    ],
    pageTitle: 'Main page title',
    showCars: true
  };


  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  changeTitleHandler = (title) => {
    console.log(1);
    this.setState({
      pageTitle: title
    })
  }

  handleInput = (e) => {
    this.setState({
      pageTitle: e.target.value
    })
  }

  render() {


    return (
      <div className={classes.Content}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler.bind(this)}>Show list</button>


       {this.state.showCars ? ( this.state.cars.map(car => {
          return (
            <Car
              key={car.id}
              name={car.name}
              year={car.year}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
            />
          )
        }) ) : null }

        <input type="text" onChange={this.handleInput}/>
        {/* <button onClick={this.changeTitleHandler.bind(this, 'change')}>Change title</button> */}


      </div>
    );
  }
}

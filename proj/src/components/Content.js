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
  };

  render() {

    const cars = this.state;

    cars.map(item, () => {
      
    })

    return (
      <div className={classes.Content}>
        {this.props.children}
        <Car />
        <Car />
        <Car />
      </div>
    );
  }
}

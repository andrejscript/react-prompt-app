import React from 'react';
import classes from './Car.module.css';

const Car = (props) => {
  //const {

  //} = props;
  return (
    <div className={classes.Car}>
      <h3>{props.name}</h3>
      <p>{props.year}</p>
      <button onClick={props.onChangeTtitle}>Click</button>
    </div>
  );
};

export default Car;

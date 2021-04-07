import React from 'react';
import classes from './Car.module.css';

const Car = (props) => {

  return (
    <div className={classes.Car}>
      <h3>{props.name}</h3>
      <p>{props.year}</p>
      <button onClick={props.onChangeTitle}>Click</button>
    </div>
  );
};

export default Car;

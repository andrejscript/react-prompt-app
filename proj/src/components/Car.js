import React from 'react';
import classes from './Car.module.css';

const Car = props => {
  //const {
    
  //} = props;
  return (
   <div className={classes.Car}>
    {props.name}
    {props.year}
   </div>
  );
};
  
export default Car;
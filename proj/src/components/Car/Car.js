import React from 'react';
import classes from './Car.module.css';

const Car = (props) => {
  const inputCls = ['input'];

  if (props.name !== '') {
    inputCls.push('green');
  } else {
    inputCls.push('red');
  }

  return (
    <div className={classes.Car}>
      <h3>{props.name}</h3>
      <p>{props.year}</p>
      <input
        type='text'
        onChange={props.onChangeName}
        value={props.name}
        className={inputCls.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>

    </div>
  );
};

export default Car;

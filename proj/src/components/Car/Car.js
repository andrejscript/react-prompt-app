import React from 'react';
// import classes from './Car.module.css';
import './Car.css';
import Radium from 'radium';

const Car = (props) => {
  const inputCls = ['input'];

  if (props.name !== '') {
    inputCls.push('green');
  } else {
    inputCls.push('red');
  }

  const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
    transition: '0.3s',
    ':hover': {
      border: '1px solid #52b0c7',
      boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
      transition: '0.3s'
    }
  }

  return (
    <div className='Car' style={style}>
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

export default Radium(Car);

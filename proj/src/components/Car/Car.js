import React from 'react';
import classes from './Car.module.scss';
import withClass from '../hoc/withClass';
import PropTypes from 'prop-types';
// import Radium from 'radium';

const Car = props => {
  const inputCls = [classes.input];

  if (props.name !== '') {
    inputCls.push(classes.green);
  } else {
    inputCls.push(classes.red);
  }

  return (
    <>
      <h3>{props.name}</h3>
      <p>{props.year}</p>
      <input
        type='text'
        onChange={props.onChangeName}
        value={props.name}
        className={inputCls.join(' ')}
      />
      <button onClick={props.onDelete}>Delete</button>

    </>
  );
};


Car.defaultProps = {
  name: 'auto'
};


Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

// export default Radium(Car);
export default withClass(Car, classes.Car);

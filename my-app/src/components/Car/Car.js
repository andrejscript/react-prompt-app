import React from 'react';
import classes from './Car.module.scss';
import withClass from '../hoc/withClass';
import PropTypes from 'prop-types';
// import Radium from 'radium';

class Car extends React.Component {
  constructor() {
    super();
    this.nameField = React.createRef();
  }
  componentDidMount() {
    if (this.props.index === 2) {
      this.inputRef.focus();
    }
  }

  render() {
    const inputCls = [classes.input];

    if (this.props.name !== '') {
      inputCls.push(classes.green);
    } else {
      inputCls.push(classes.red);
    }    

    return (
      <>
        <h3 ref={this.nameField}>{this.props.name}</h3>
        <p>{this.props.year}</p>
        <input
          ref={(inputRef) => (this.inputRef = inputRef)}
          type='text'
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputCls.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </>
    );
  }
}

Car.defaultProps = {
  name: 'auto',
};

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func,
};

// export default Radium(Car);
export default withClass(Car, classes.Car);

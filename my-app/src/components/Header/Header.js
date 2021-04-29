import React from 'react';
import { Link } from 'react-router-dom';

// import classes from './Header.module.css';
const Header = () => {
  //const {

  //} = props;
  return (
    <div>
      <Link to='/'>Main</Link>
      <br />
      <Link to='/car'>Car</Link>
      <br />
      <Link to='/counter'>Counter</Link>
    </div>
  );
};

export default Header;



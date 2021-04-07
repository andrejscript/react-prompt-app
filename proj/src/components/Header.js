import React from 'react';
import classes from './Hedaer.module.css';

const Header = props => {

  return (
   <div className={classes.Header}>
    Header
   {props.children}
   </div>
   
  );
};
  
export default Header;
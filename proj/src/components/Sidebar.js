import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = props => {

  return (
   <div className={classes.Sidebar}>
   Sidebar
   {props.children}
   </div>
   
  );
};
  
export default Sidebar;
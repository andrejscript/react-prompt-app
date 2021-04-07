import React from 'react';
import classes from './Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className={classes.Sidebar}>
      Sidebar
      <ul>
        <li>
          <Link to='/main'>1</Link>
        </li>
        <li>
          <Link to='/blog'>2</Link>
        </li>
        <li>
          <Link to='/contacts'>3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

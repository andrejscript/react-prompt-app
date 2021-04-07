import React, { Component } from 'react';
import classes from './Content.module.css';
   
export default class Content extends Component {
   
render() {
  return (  
    <div className={classes.Content}>
      <h1>Main page title</h1>
    </div>
    );
  }
}
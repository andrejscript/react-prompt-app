import React from 'react';
import './Counter2.css';

export default props => {
  return (
    <div className={'Counter2'}>
      <h3>Counter 2</h3>
      <p>Clicked...</p>
      {props.clicked ? <p>ok</p> : null}
    </div>
  )
}
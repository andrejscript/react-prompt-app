import React from 'react';
import './Counter2.css';
// import { ClickedContext } from '../../App';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div className={'Counter2'}>
      <h3>Counter 2</h3>
      <p>Clicked...</p>
      {/* <ClickedContext.Consumer>
        {props.clicked ? <p>ok</p> : null}
      </ClickedContext.Consumer> */}
    </div>
  );
};

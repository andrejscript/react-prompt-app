import React from 'react';

const withClass = (Component, className) => props => {
  return (
    <div className={className}>
      <Component {...props} />
    </div>
  );
};

export default withClass;

import React from 'react';

import classes from 'components/UI/Button/Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// if there is a function as a propery then
// memo doesn't work without a useCallback hook in the parent component
export default React.memo(Button);

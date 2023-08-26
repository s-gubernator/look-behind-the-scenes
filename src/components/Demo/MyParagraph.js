import React from 'react';

const MyParagraph = (props) => {
  console.log('MyParagraph RUNNING');

  return <p className={props.className}>{props.children}</p>;
};

// memo doesn't work for some reason
export default React.memo(MyParagraph);

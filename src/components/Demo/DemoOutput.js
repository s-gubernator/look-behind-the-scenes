import React from 'react';

import MyParagraph from 'components/Demo/MyParagraph';

const DemoOutput = ({ show, className }) => {
  console.log('DemoOutput RUNNING');

  let paragraphContent = '';

  if (show) {
    paragraphContent = 'This is new';
  }

  console.log('Paragraph content: ', paragraphContent);

  return (
    <MyParagraph className={className}>{paragraphContent}</MyParagraph>
  );
};

export default React.memo(DemoOutput);

import React, { useState } from 'react';

import 'App.css';
import Button from 'components/UI/Button/Button';
import DemoOutput from 'components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');
  console.log('Show paragraph: ', showParagraph);
  const toggleParagraphHandler = () => {
    // setShowParagraph(!showParagraph);
    setShowParagraph((prevState) => !prevState);
  };

  // Re-evaluation is when react updates its VirtualDOM
  // and happens when:
  // - component is not memoized and parent component re-evaluates
  //   (not necessary props must change);
  // - component is memoized and its props/state changes;
  // - component's state changes
  //
  // So re-render is when react updates DOM and happens when:
  // - re-evaluated virtual DOM node is different than DOM node

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && (
        <p className="centeredText">This is new paragraph</p>
      )} */}
      {/* <DemoOutput className="centeredText" show={showParagraph} /> */}
      <DemoOutput className="centeredText" show={false} />
      <Button className="centeredBtn" onClick={toggleParagraphHandler}>
        <span>Toggle paragraph</span>
      </Button>
    </div>
  );
}

export default App;

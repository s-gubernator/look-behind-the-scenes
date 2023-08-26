import React, { Fragment, useState, useCallback } from 'react';

import 'App.css';
import Button from 'components/UI/Button/Button';
import DemoOutput from 'components/Demo/DemoOutput';
// import TestComponent from 'components/ExploreUseMemo/TestComponent';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  // --- React.memo doesn't work for components that receive functions as props ---
  // ------------------------------------------------------------------------
  // memo compare every different props, including functions.
  // However, by redefining function inside component in every evaluation,
  // React creates a different reference every time
  // (as function is reference data type).
  // Because the identity of the function will be different on each evaluation of the parent,
  // that causes memo to see the props as having changed, so child component will be re-evaluated.

  // --- useCallback should be used here ---
  // useCallback is a React Hook that lets you cache
  // a function definition between re-renders
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  // Re-evaluation is when react updates its VirtualDOM
  // and happens when:
  // - component is not memoized and parent component re-evaluates
  //   (not necessary props must change);
  // - component is memoized and its props/state changes;
  // - component's state changes
  //
  // So re-render is when react updates DOM and happens when:
  // - re-evaluated virtual DOM node is different than DOM node

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <Fragment>
      <div className="app">
        <h1>Hi there!</h1>
        {/* {showParagraph && (
          <p className="centeredText">This is new paragraph</p>
        )} */}
        <DemoOutput className="centeredText" show={showParagraph} />
        <Button className="centeredBtn" onClick={allowToggleHandler}>
          Allow toggle
        </Button>
        <Button className="centeredBtn" onClick={toggleParagraphHandler}>
          Toggle paragraph
        </Button>
      </div>

      {/* <TestComponent /> */}
    </Fragment>
  );
}

export default App;

import { Fragment, useState } from 'react';

import 'App.css';
import Button from 'components/UI/Button/Button';
import DemoOutput from 'components/Demo/DemoOutput';
// import TestComponent from 'components/ExploreUseMemo/TestComponent';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');
  console.log('Show paragraph: ', showParagraph);

  // --- memo doesn't work for components that receive functions as props ---
  // ------------------------------------------------------------------------
  // memo compare every different props, including functions.
  // However, by redefining function inside component in every evaluation,
  // React creates a different reference every time
  // (as function is reference data type).
  // Because the identity of the function will be different on each evaluation of the parent,
  // that causes memo to see the props as having changed, so child component will be re-evaluated.

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
    <Fragment>
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

      {/* <TestComponent /> */}
    </Fragment>
  );
}

export default App;

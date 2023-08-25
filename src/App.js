import React, { useState } from 'react';

import 'App.css';
import Button from 'components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    // setShowParagraph(!showParagraph);
    setShowParagraph((prevState) => !prevState);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && (
        <p className="centeredText">This is new paragraph</p>
      )}
      <Button className="centeredBtn" onClick={toggleParagraphHandler}>
        <span>Toggle paragraph</span>
      </Button>
    </div>
  );
}

export default App;

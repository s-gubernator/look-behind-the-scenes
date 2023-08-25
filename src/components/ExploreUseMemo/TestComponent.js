import { useState, useMemo, useEffect } from 'react';

export default function TestComponent() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubledNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  useEffect(() => {
    console.log('Theme styles changed');
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevState) => !prevState)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubledNumber}</div>
    </>
  );
}

function slowFunction(number) {
  console.log('Calling Slow Function');
  for (let i = 0; i <= 10000000000; i++) {
    i += 1;
  }
  return number * 2;
}

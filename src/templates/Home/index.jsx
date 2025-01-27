import { useEffect } from 'react';
import { useState } from 'react';

const s = {
  style: {
    fontSize: '60px',
  },
};

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
    if (counter > 3) {
      throw new Error('Que chato!!!');
    }
  }, [counter]);

  return (
    <div>
      <button {...s} onClick={() => setCounter((c) => c + 1)}>
        Click to increase {counter}
      </button>
    </div>
  );
};

export const Home = () => {
  return (
    <div {...s}>
      <ItWillThrowError />
    </div>
  );
};

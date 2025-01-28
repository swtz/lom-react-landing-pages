import { lazy, Suspense, useState } from 'react';

const loadComponent = () => import('./LazyComponent'); // dynamic import

const LazyComponent = lazy(loadComponent);

export const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>
        <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>
          Show {show ? 'LC is on screen' : 'LC is off screen'}
        </button>
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
};

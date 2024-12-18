import { lazy, Suspense } from 'react';

const LazyApp = lazy(() => import('./App'));

const App = props => (
  <Suspense fallback={null}>
    <LazyApp {...props} />
  </Suspense>
);

export default App;

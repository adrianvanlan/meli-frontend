import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import Layout from './components/Layout/Layout';
import ListItems from './components/ListItems/ListItems';
import styles from './App.module.scss';

function App() {
  const logError = (error, info) => {
    console.error(error, info);
  };

  return (
    <div className={styles.App}>
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/items/:id" element={<div>items</div>} />
            <Route path="/items/" element={<ListItems />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;

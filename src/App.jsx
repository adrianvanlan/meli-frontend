import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Layout from './components/Layout/Layout';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';

function App() {
  const handleError = (error, info) => {
    console.log(error, info);
  };

  return (
    <div className={styles.App}>
      <ErrorBoundary fallback={<ErrorFallback />} onError={handleError}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/items/:id" element={<div>items</div>} />
            <Route path="/items/" element={<div>item</div>} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;

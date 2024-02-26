import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import ItemDetail from './components/ItemDetail/ItemDetail';
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
        <HelmetProvider>
          <Helmet>
            <title>Mercado Libre Argentina - Envíos Gratis en el día</title>
            <meta
              name="description"
              content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles."
            />
          </Helmet>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/items/:id" element={<ItemDetail />} />
              <Route path="/items/" element={<ListItems />} />
            </Route>
          </Routes>
        </HelmetProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;

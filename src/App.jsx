import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/items/:id" element={<div>items</div>} />
          <Route path="/items/" element={<div>item</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

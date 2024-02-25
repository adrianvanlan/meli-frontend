import AppBar from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

function Layout() {
  return (
    <>
      <AppBar />
      <div className={styles.Layout__container}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;

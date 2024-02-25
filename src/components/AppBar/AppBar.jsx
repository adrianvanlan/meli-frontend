import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';
import styles from './AppBar.module.scss';

const AppBar = () => (
  <header className={styles.AppBar}>
    <div className={styles.AppBar__Container}>
      <Logo width={53} />
      <SearchInput className={styles.SearchInput} />
    </div>
  </header>
);

export default AppBar;

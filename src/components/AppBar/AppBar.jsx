import './AppBar.module.scss';
import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';

const AppBar = () => (
  <header className="AppBar">
    <div className="AppBar__Container">
      <Logo width={53} />
      <SearchInput className="SearchInput" />
    </div>
  </header>
);

export default AppBar;

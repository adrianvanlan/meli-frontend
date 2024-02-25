import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import IconSearch from '../IconSearch/IconSearch';
import styles from './SearchInput.module.scss';

function SearchInput() {
  const [searchValue, setSearchValue] = useState('');
  const navigateTo = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const q = query.get('q');
    setSearchValue(q || '');
  }, [search]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.q.value;
    if (inputValue) {
      navigateTo(`/items?q=${inputValue}`);
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form onSubmit={handlerSubmit} className={styles.SearchInput}>
      <input
        autoComplete="off"
        className={styles.SearchInput__input}
        name="q"
        placeholder="Buscar productos, marcas y más…"
        value={searchValue}
        onChange={handleChange}
        autoFocus
      />
      <button className={styles.SearchInput__button} type="submit">
        <IconSearch />
      </button>
    </form>
  );
}

export default SearchInput;

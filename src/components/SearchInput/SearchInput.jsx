import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import IconSearch from '../IconSearch/IconSearch';
import './SearchInput.module.scss';

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
    <form onSubmit={handlerSubmit} className="SearchInput">
      <input
        autoComplete="off"
        className="SearchInput__input"
        name="q"
        placeholder="Buscar productos, marcas y más…"
        value={searchValue}
        onChange={handleChange}
      />
      <button className="SearchInput__button" type="submit">
        <IconSearch />
      </button>
    </form>
  );
}

export default SearchInput;

import { render } from '@testing-library/react';
import SearchInput from './SearchInput';
import { MemoryRouter } from 'react-router-dom';

describe('Should render SearchInput', () => {
  it('should render SearchInput', () => {
    const wrapper = render(
      <MemoryRouter>
        <SearchInput />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

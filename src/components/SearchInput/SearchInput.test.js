import { MemoryRouter } from 'react-router-dom';
import SearchInput from './SearchInput';
import { render } from '@testing-library/react';

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

import { render } from '@testing-library/react';
import IconSearch from './IconSearch';
import { MemoryRouter } from 'react-router-dom';

describe('Should render IconSearch', () => {
  it('should render IconSearch', () => {
    const wrapper = render(
      <MemoryRouter>
        <IconSearch />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

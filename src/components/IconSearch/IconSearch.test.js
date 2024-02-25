import IconSearch from './IconSearch';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

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

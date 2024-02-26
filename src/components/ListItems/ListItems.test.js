import ListItems from './ListItems';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

jest.mock('react-helmet-async', () => ({
  Helmet: () => jest.fn(),
  HelmetProvider: () => jest.fn(),
}));

jest.mock('../../hooks/useItems', () => ({
  useItems: () => ({
    items: [],
    categories: [],
    isLoading: false,
    isError: false,
  }),
}));

it('expect to render ListItem component', () => {
  const wrapper = render(
    <MemoryRouter>
      <ListItems />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

import ItemDetail from './ItemDetail';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

jest.mock('react-helmet-async', () => ({
  Helmet: () => jest.fn(),
  HelmetProvider: () => jest.fn(),
}));

jest.mock('../../hooks/useItems', () => ({
  useItem: () => ({
    item: {
      id: 'MLA123456',
      title: 'Item Title',
      price: {
        currency: 'ARS',
        amount: 123,
        decimals: 0,
      },
      picture: '',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 1,
      description: 'Item Description',
      categories: ['Category 1', 'Category 2'],
    },
  }),
}));

it('expect to render ItemDetail component', () => {
  const wrapper = render(
    <MemoryRouter>
      <ItemDetail />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

import axios from 'axios';
import { fetchItems } from './items.service';
import { jest } from '@jest/globals';

const MOCK_ITEMS = {
  author: { name: 'Adrian', lastname: 'Van Langenhove' },
  categories: ['Celulares y Teléfonos', 'Celulares y Smartphones'],
  items: [
    {
      id: 'MLA1397418693',
      title: 'Apple iPhone SE Se (3ª Generación, 64 Gb)',
      picture: 'http://http2.mlstatic.com/D_696564-MLA52130732644_102022-I.jpg',
      condition: 'new',
      free_shipping: true,
      price: { currency: 'ARS', amount: 633598, decimals: 80 },
    },
    {
      id: 'MLA1363433735',
      title: 'Apple iPhone 13 (128 Gb) - Rosa',
      picture: 'http://http2.mlstatic.com/D_654080-MLA47781882564_102021-I.jpg',
      condition: 'new',
      free_shipping: true,
      price: { currency: 'ARS', amount: 978999, decimals: 0 },
    },
    {
      id: 'MLA1391034923',
      title: 'Apple iPhone 15 (128 Gb) - Negro',
      picture: 'http://http2.mlstatic.com/D_779617-MLA71782867320_092023-I.jpg',
      condition: 'new',
      free_shipping: true,
      price: { currency: 'ARS', amount: 1270499, decimals: 0 },
    },
    {
      id: 'MLA1357319640',
      title: 'Apple iPhone 14 (128 Gb) - Medianoche',
      picture: 'http://http2.mlstatic.com/D_881016-MLM51559383738_092022-I.jpg',
      condition: 'new',
      free_shipping: true,
      price: { currency: 'ARS', amount: 1125742, decimals: 0 },
    },
  ],
};

jest.mock('axios');

describe('Items Service', () => {
  it('should return a list of items', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: MOCK_ITEMS }),
    );
    const data = await fetchItems('iphone');
    expect(data.categories).toHaveLength(2);
    expect(data.items).toHaveLength(4);
  });
});

import Breadcrumb from './Breadcrumb';
import { render } from '@testing-library/react';

it('expect to render Breadcrumb component', () => {
  const mockCategories = ['Celulares y Teléfonos', 'Celulares y Smartphones'];
  const wrapper = render(<Breadcrumb categories={mockCategories} />);

  expect(wrapper).toMatchSnapshot();
});

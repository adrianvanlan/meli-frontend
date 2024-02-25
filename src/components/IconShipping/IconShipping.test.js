import IconShipping from './IconShipping';
import { render } from '@testing-library/react';

it('expect to render IconShipping component', () => {
  const wrapper = render(<IconShipping />);

  expect(wrapper).toMatchSnapshot();
});

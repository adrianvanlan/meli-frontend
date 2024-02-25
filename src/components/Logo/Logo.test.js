import Logo from './Logo';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('Should render Logo', () => {
  it('should render Logo', () => {
    const wrapper = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

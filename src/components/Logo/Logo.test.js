import { render } from '@testing-library/react';
import Logo from './Logo';
import { MemoryRouter } from 'react-router-dom';

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

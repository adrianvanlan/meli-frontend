import { render } from '@testing-library/react';
import ErrorFallback from './ErrorFallback';
import { MemoryRouter } from 'react-router-dom';

describe('Should render ErrorFallback', () => {
  it('should render ErrorFallback', () => {
    const wrapper = render(
      <MemoryRouter>
        <ErrorFallback error={{ message: 'error' }} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

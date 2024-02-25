import Layout from './Layout';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('Should render Layout', () => {
  it('should render Layout', () => {
    const wrapper = render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

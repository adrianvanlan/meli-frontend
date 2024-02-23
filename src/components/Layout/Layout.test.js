import { render } from '@testing-library/react';
import Layout from './Layout';
import { MemoryRouter } from 'react-router-dom';

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

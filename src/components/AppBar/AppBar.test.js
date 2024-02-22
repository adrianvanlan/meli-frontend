import { render } from '@testing-library/react';
import AppBar from './AppBar';
import { MemoryRouter } from 'react-router-dom';

describe('Should render AppBar', () => {
  it('should render AppBar', () => {
    const wrapper = render(
      <MemoryRouter>
        <AppBar />
      </MemoryRouter>,
    );
    //console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });
});

import ListItem from './ListItem';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

it('expect to render ListItem component', () => {
  const mockItemData = {
    id: 'MLAEXAMPLE',
    title: 'some title',
  };
  const wrapper = render(
    <MemoryRouter>
      <ListItem itemData={mockItemData} />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

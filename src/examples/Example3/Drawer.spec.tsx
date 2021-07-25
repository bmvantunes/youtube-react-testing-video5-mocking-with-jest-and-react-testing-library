import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import { MyDrawer } from './Drawer';
import user from '@testing-library/user-event';

// use jest.mock factory and show require actual

describe('Drawer', () => {
  it('shows no "Hello YouTube!"', () => {
    render(<MyDrawer />);
    expect(screen.queryByText('Hello YouTube!')).not.toBeInTheDocument();
  });

  it('clicking on "Open Drawer" Button shows "Hello YouTube!"', async () => {
    render(<MyDrawer />);
    user.click(screen.getByRole('button', { name: 'Open Drawer' }));
    expect(screen.getByText('Hello YouTube!')).toBeInTheDocument();

    user.keyboard('{escape}');
    await waitForElementToBeRemoved(() => screen.getByText('Hello YouTube!'));
  });
});

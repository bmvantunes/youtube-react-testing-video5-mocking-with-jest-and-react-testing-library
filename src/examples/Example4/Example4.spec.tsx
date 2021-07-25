import { render, screen } from '@testing-library/react';
import { Example4 } from './Example4';

// example 4 - use mocked().mockImplementation

describe('Example4', () => {
  it('renders MyDrawer', () => {
    render(<Example4 />);
    expect(screen.getByText('Hello Drawer Component!')).toBeInTheDocument();
  });
});

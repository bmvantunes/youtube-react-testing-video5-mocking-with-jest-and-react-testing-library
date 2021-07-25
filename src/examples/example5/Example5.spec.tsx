import { render, screen } from '@testing-library/react';
import { Example5 } from './Example5';

// __mocks__ folders!

describe('Example 5', () => {
  it('renders very complex component', () => {
    render(<Example5 />);
    expect(screen.getByText('Very Complex Component')).toBeInTheDocument();
  });
});

import { Example2 } from './Example2';
import { render, screen } from '@testing-library/react';

// use jest.mock and mocked to check the function has been Called with

describe('MyComponent', () => {
  it('renders Material-UI grid with columnDefs and rowData', () => {
    const myOnMoney = () => {
      console.log('clicked');
    };
    render(<Example2 onMoney={myOnMoney} />);
    expect(screen.getByText('ID')).toBeInTheDocument();
  });
});

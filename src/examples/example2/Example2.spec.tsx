import { Example2, rows } from './Example2';
import { fireEvent, render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { DataGrid } from '@material-ui/data-grid';

jest.mock('@material-ui/data-grid', () => ({
  ...jest.requireActual('@material-ui/data-grid'),
  DataGrid: jest.fn(() => <div>Table</div>),
}));

const mockedDataGrid = mocked(DataGrid);

describe('MyComponent', () => {
  beforeEach(() => {
    mockedDataGrid.mockClear();
  });

  it('renders Material-UI grid with columnDefs and rowData', () => {
    const myOnMoney = jest.fn();
    render(<Example2 onMoney={myOnMoney} />);
    fireEvent.click(screen.getByRole('button', { name: 'Give me 33 dollars' }));
    expect(myOnMoney).toHaveBeenCalledTimes(1);
    expect(myOnMoney).toHaveBeenCalledWith(33);
  });

  it('renders table passing the expected props', () => {
    render(<Example2 onMoney={jest.fn()} />);
    expect(mockedDataGrid).toHaveBeenCalledTimes(1);
    expect(mockedDataGrid).toHaveBeenLastCalledWith(
      {
        rows: rows,
        columns: [
          expect.objectContaining({ field: 'id' }),
          expect.objectContaining({ field: 'firstName' }),
          expect.objectContaining({ field: 'lastName' }),
          expect.objectContaining({ field: 'age' }),
        ],
        pageSize: 5,
        checkboxSelection: true,
      },
      {}
    );
  });
});

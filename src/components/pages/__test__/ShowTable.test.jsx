import React from 'react';
import { render ,screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import  store  from '../../../store';
import  ShowTable from '../calendar/ShowTable';

test('renders chocolate Table ', () => {
    const dayStatus = [{day:1, status:0}];
     render(
      <Provider store={store}>
        <ShowTable header={['Day','Status']} tableInfo={dayStatus}/>
      </Provider>
    );
    const textDay = screen.getByText(/Day/i);
    expect(textDay).toBeInTheDocument();
    const textStatus = screen.getByText(/Status/i);
    expect(textStatus).toBeInTheDocument();
  });

  test('renders chocolate Table check not availabe ', () => {
    const dayStatus = [{day:1, status:0}];
     render(
      <Provider store={store}>
        <ShowTable header={['Day','Status']} tableInfo={dayStatus}/>
      </Provider>
    );
    const textDay = screen.getByText(/Day/i);
    expect(textDay).toBeInTheDocument();
    const textStatus = screen.getByText(/Status/i);
    expect(textStatus).toBeInTheDocument();
    const textStatusValue = screen.getByText(/Not Available/i);
    expect(textStatusValue).toBeInTheDocument();
  });

  test('renders chocolate Table check  availabe ', () => {
    const dayStatus = [{day:1, status:1}];
     render(
      <Provider store={store}>
        <ShowTable header={['Day','Status']} tableInfo={dayStatus}/>
      </Provider>
    );
    const textDay = screen.getByText(/Day/i);
    expect(textDay).toBeInTheDocument();
    const textStatus = screen.getByText(/Status/i);
    expect(textStatus).toBeInTheDocument();
    const textStatusValue = screen.getByText(/Available/i);
    expect(textStatusValue).toBeInTheDocument();
  });

  test('renders chocolate Table check  open ', () => {
    const dayStatus = [{day:1, status:2}];
     render(
      <Provider store={store}>
        <ShowTable header={['Day','Status']} tableInfo={dayStatus}/>
      </Provider>
    );
    const textDay = screen.getByText(/Day/i);
    expect(textDay).toBeInTheDocument();
    const textStatus = screen.getByText(/Status/i);
    expect(textStatus).toBeInTheDocument();
    const textStatusValue = screen.getByText(/open/i);
    expect(textStatusValue).toBeInTheDocument();
  });

  test('renders chocolate Table check  Empty ', () => {
    const dayStatus = [{day:1, status:3}];
     render(
      <Provider store={store}>
        <ShowTable header={['Day','Status']} tableInfo={dayStatus}/>
      </Provider>
    );
    const textDay = screen.getByText(/Day/i);
    expect(textDay).toBeInTheDocument();
    const textStatus = screen.getByText(/Status/i);
    expect(textStatus).toBeInTheDocument();
    const textStatusValue = screen.getByText(/Empty/i);
    expect(textStatusValue).toBeInTheDocument();
  });

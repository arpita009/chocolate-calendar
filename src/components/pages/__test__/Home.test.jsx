import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import  store  from '../../../store';
import  Home from '../home/Home';

test('renders chocolate Home Screen ', () => {
     render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

  });


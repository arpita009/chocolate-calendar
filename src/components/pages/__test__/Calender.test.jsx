import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../store';
import Calendar from '../calendar/Calendar';

test('renders chocolate Calendar Screen ', () => {
  render(
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
});

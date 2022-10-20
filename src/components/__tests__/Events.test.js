import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Event from '../events/Event';
import store from '../../app/store'

describe('Events', () => {
  render(
    <Provider store={store}>
    <Router>
      <Event />
    </Router>
    </Provider>,
  );

  test('The events page header', () => {
    const header = screen.getByText('Our Events List');
    expect(header).toBeInTheDocument();
  });

  test('It renders the Events component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Event />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
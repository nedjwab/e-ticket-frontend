import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import EventDetails from '../events/EventDetails';
import store from '../../app/store'

describe('Event detail page', () => {
  render(
    <Provider store={store}>
      <Router>
        <EventDetails/>
      </Router>
    </Provider>,
  );
  
  test('Test the dom for non existing elements on the page', () => {
    const flower = screen.queryByText('flower');
    expect(flower).not.toBeInTheDocument();
  });

  test('It renders the events details page', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <EventDetails/>
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('It renders the Room correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <EventDetails />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
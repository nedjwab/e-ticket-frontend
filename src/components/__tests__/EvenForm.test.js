import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import AddEvent from '../events/EventForm';
import store from '../../app/store'

describe('Events', () => {
    it('renders correctly', () => {
    const home = renderer
    .create(<Provider store={store}><Router><AddEvent /></Router></Provider>)
    .toJSON();
  expect(home).toMatchSnapshot();
   });
});
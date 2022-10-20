import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Event from '../events/Event';
import store from '../../app/store'

describe('Events', () => {
    it('renders correctly', () => {
    const home = renderer
    .create(<Provider store={store}><Router><Event /></Router></Provider>)
    .toJSON();
  expect(home).toMatchSnapshot();
   });
});
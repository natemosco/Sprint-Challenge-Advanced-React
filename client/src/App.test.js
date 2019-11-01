import React from 'react';
import { render, findAllByTestId } from "@testing-library/react";
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('Alex Morgan is present on the page', () => {
  const { findByText } = render(<App />);

  findByText(/morgan/i);
});

test("checks all 101 players are displayed on a page", () => {
  //import {findAllByTestId} up at top of App.test.js
  const container = render(<App></App>);
  for (let index = 0; index < 101; index++) {
    findAllByTestId(container, index)
  }

})

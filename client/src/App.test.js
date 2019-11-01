import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('Alex Morgan is present on the page', () => {
  const { findByText } = render(<App />);

  findByText(/morgan/i);
});

test("checks all 101 players are displayed on a page",=() => {
  const findAllBy
})

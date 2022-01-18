import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByTestId(/wrapper/);
  expect(linkElement).toBeInTheDocument();
});

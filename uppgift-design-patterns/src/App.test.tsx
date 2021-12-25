import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { shallow, mount } from 'enzyme'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Testar med enzyme", () => {
  it("renders the App component", () => {
    render(<App />);
  })
})

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MeetupsView } from './components/MeetupsView';

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

describe("Test MeetupsView", () => {
  it("renders MeetupsView", () => {
    render(<MeetupsView />);
  })
  it("renders one child in the view", () => {
    const wrapper = mount(<MeetupsView />)
    const content = wrapper.children.length
    expect(content).toEqual(1)
  })
  it("renders the main div within the view", () => {
    const wrapper = mount(<MeetupsView />)
    const mainDiv = wrapper.find('div')
    expect(mainDiv).toBeTruthy()
  })
  it("renders a list", () => {
    const wrapper = mount(<MeetupsView />)
    const meetupsList = wrapper.find('li')
    expect(meetupsList.exists()).toBe(true)
  })
})

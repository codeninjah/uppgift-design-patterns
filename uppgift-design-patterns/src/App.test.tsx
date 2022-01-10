import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MeetupsView } from './components/MeetupsView';
import { shallow, mount } from 'enzyme';
import MeetupItem from './components/MeetupItem';


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
  it("shows all meetups that happened druing 2021", () => {
    const wrapper = mount(<MeetupsView />)
    const input = wrapper.find('[data-test="meetups-input"]').at(0)
    input.simulate('change', {target: {value: "2021"} })
    const nrofmeetups = wrapper.find('h1').length
    expect(nrofmeetups).toEqual(6)
  }),
  it("shows all meetups that happened druing 2022", () => {
    const wrapper = mount(<MeetupsView />)
    const input = wrapper.find('[data-test="meetups-input"]').at(0)
    input.simulate('change', {target: {value: "2022"} })
    const nrofmeetups = wrapper.find('h1').length
    expect(nrofmeetups).toEqual(3)
  }),
  it("shows all meetups that happen during 2020", () => {
    const wrapper = mount(<MeetupsView />)
    const input = wrapper.find('[data-test="meetups-input"]').at(0)
    input.simulate('change', {target: {value: "2020"} })
    const nrofmeetups = wrapper.find('h1').length
    expect(nrofmeetups).toEqual(1)
  }),
  it("something happens when clicking the register button", () => {
    const wrapper = mount(<MeetupItem id={'0123456789'} name={'CryptoTalks'} date={"2022-01-26"} comments={[]} />)
    const registerBtn = wrapper.find('[data-test="meetups-input"]').at(0)
    registerBtn.simulate('click')

    const mainWrapper = mount(<MeetupsView />) 
  }),

  it("it compares the event's day with today's date", () => {
    const wrapper = mount(<MeetupsView />)


  })

  /*
  it("outputs right info when clicking on a meetup", () => {
    const wrapper = mount(<MeetupsView />)
    const meetup = wrapper.find("")
  })*/

})


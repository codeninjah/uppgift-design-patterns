import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import MeetupItem from './MeetupItem';


describe("Should ", () => {
    it("something happens when clicking the register button", () => {
        const wrapper = mount(<MeetupItem id={'0123456789'} name={'CryptoTalks'} date={"2022-01-26"} description={"Bitcoin or Dogecoin? How does Crypto Currency work? What's Bitcoin mining? Why can a Bitcoin cost $10,000 sometimes and plunge to $3,000? Which currency is the next Bitcoin? How does it change banking and finance?"} comments={[]} addComment={} />)
        const registerBtn = wrapper.find('[data-test="meetups-input"]')
        registerBtn.simulate('click')
        const commentsBtn = wrapper.find('[data-test="meetups-comment-btn"]')
        expect(commentsBtn.exists()).toBe(true)
      }),
    
      it("kommentar lagras när man skrivit ett och tryckt på skicka knappen", () => {
        const wrapper = mount(<MeetupItem id={'0123456'} name={'SpaceX'} date={"2021-02-26"} description={"SpaceX is already a success, with people sent into space. This meetup will feature a lecture about how the program plans to build bases on the Moon and on March."} comments={[]} addComment={(id, comment)} />)
        const registerBtn = wrapper.find('[data-test="meetups-input"]')
        registerBtn.simulate('click')
        const input = wrapper.find('[data-test="meetups-comment-field"]').at(0)
        const commentsBtn = wrapper.find('[data-test="meetups-comment-btn"]').at(0)
        input.simulate('change', {target: {value: 'LOV3333'} }).at(0)
        commentsBtn.simulate('click')
        const comment = screen.getByText(/LOV3333/)
        console.log(comment)
        expect(comment).toBeInTheDocument()
      })
});
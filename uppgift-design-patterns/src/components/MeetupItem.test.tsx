import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import MeetupItem from './MeetupItem';


describe("Should ", () => {
    it("something happens when clicking the register button", () => {
        const wrapper = mount(<MeetupItem id={'0123456789'} name={'CryptoTalks'} date={"2022-01-26"} comments={[]} />)
        const registerBtn = wrapper.find('[data-test="meetups-input"]')
        registerBtn.simulate('click')
        const commentsBtn = wrapper.find('[data-test="meetups-comment-btn"]')
        expect(commentsBtn.exists()).toBe(true)
      }),
    
      it("kommentar lagras när man skrivit ett och tryckt på skicka knappen", () => {
        const wrapper = mount(<MeetupItem id={'0123456'} name={'SpaceX'} date={"2021-02-26"} comments={[]} />)
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
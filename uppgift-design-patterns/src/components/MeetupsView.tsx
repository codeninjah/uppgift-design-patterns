import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import React, {useState, useEffect} from 'react';
import { Meetups } from '../database.json';
import  MeetupItem  from './MeetupItem';
import { Props } from '../models/Meetup';

export const MeetupsView = () => {
    const parsedmeetupsList = JSON.parse(JSON.stringify(Meetups))
    let sortedmeetupsList = parsedmeetupsList.sort((a: { date: string; },b: { date: string; }) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0))
    
    let [meetups, setMeetups] = useState(sortedmeetupsList)
    const [inputValue, setInputValue] = useState<string>("")
    
    const addComment = (id: string, comment: string) => {
        const newMeetupsList = meetups.map((item: any) => {
            if(item.id === id) item.comments.push(comment) 
            return item
        })

        setMeetups(newMeetupsList)
    }
    
    //Denna funktion skall jämföra dagens datum med datumen för meetups'en
    //Borde skriva tester innan jag fortsätter bygga ut den
    const dateCompare = (eventDate: any) => {
        const todaysDate = new Date().toISOString().split('T')[0]
        const todaysDateYear = todaysDate.split("-")[0]
        const todaysDateMonth = todaysDate.split("-")[1]
        const todaysDateDay = todaysDate.split("-")[2]

        const testDate = eventDate.split('T')[0]
        const testDateYear = testDate.split("-")[0]
        const testDateMonth = testDate.split("-")[1]
        const testDateDay = testDate.split("-")[2]
        console.log(testDateDay)
    }

    dateCompare("2020-10-10")

    return (
        <>
        <div>
          <div className="inputContainer">
            <label htmlFor="">Search</label>
            <input 
            type="text"
            data-test="meetups-input"
            value={inputValue}
            onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setInputValue(ev.target.value)}
          />
        </div>
            <div className="meetups-list">

                <ol className="sorted-meetups-list-test">
                {
                    meetups.filter((item: any) => item.date.includes(inputValue)).map((item: any) => 
                            <li>
                                 <article key={item.id}> 
                                    <MeetupItem key={item.id} id={item.id} name={item.name} date={item.date} comments={item.comments} addComment={(id, comment) => addComment(id, comment)} /> 
                                </article>
                            </li>
                        )
                }
                </ol>

            </div>
        </div>
        </>
    )
}

export default MeetupsView
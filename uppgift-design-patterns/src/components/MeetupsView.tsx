import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import React, {useState} from 'react';
import { Meetups } from '../database.json';
//import { IMeetup } from '../models/Meetup';
import  MeetupItem  from './MeetupItem';
import { Props } from '../models/Meetup';


export const MeetupsView = () => {
    const meetupsList = Meetups
    const parsedmeetupsList = JSON.parse(JSON.stringify(Meetups))
    const sortedmeetupsList = parsedmeetupsList.sort((a: { date: string; },b: { date: string; }) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0))

    const [inputValue, setInputValue] = useState<string>("")
    const goToMeetup = (id: any) => {
        const meetupinterestedby = sortedmeetupsList.find((item: any) => item.id == id)
            if(meetupinterestedby){
                console.log("Alex");
                //<MeetupItem id={meetupinterestedby.id} name={meetupinterestedby.name} date={meetupinterestedby.date} comments={[]} />
                console.log("Was here");
            }
    }

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
            
                {/* <ul>
                    {
                        meetupsList.map(item =>
                            <li key={item.date}> Datum: {item.date} Namn: {item.name}</li>  
                        )
                    }
                </ul> */}

                <ol className="sorted-meetups-list">
                {
                    sortedmeetupsList.filter((item: any) => item.date.includes(inputValue)).map((item: any) => 
                            <li className="sorted-meetups-list-item">DATE: {item.date}   NAME:  {item.name}</li>
                        )
                }
                </ol>

                <ol className="sorted-meetups-list-test">
                {
                    sortedmeetupsList.filter((item: any) => item.date.includes(inputValue)).map((item: any) => 
                            <li>DATE: {item.date}   NAME:  {item.name}
                                <article key={item.id} onClick={goToMeetup}>
                                    <MeetupItem key={item.id} id={item.id} name={item.name} date={item.date} comments={item.comments}/>
                                        {/* <button className="button" data-test="meetup-item-button" onClick={() => props.view(item)}>View Meetup</button> */}
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
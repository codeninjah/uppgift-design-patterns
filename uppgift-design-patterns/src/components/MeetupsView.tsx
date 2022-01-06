import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import React, {useState} from 'react';
import { Meetups } from '../database.json';
import { IMeetup } from '../models/Meetup';


export const MeetupsView = () => {
    const meetupsList = Meetups
    const parsedmeetupsList = JSON.parse(JSON.stringify(Meetups))
    const sortedmeetupsList = parsedmeetupsList.sort((a: { date: string; },b: { date: string; }) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0))

    const [inputValue, setInputValue] = useState<string>("")
    return (
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
            </div>
        </div>
    )
}

export default MeetupsView
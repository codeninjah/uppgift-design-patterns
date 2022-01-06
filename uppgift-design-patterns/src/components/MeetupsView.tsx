import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import { Meetups } from '../database.json';
import { IMeetup } from '../models/Meetup';


export const MeetupsView = () => {
    const meetupsList = Meetups
    const parsedmeetupsList = JSON.parse(JSON.stringify(Meetups))
    const sortedmeetupsList = parsedmeetupsList.sort((a: { date: string; },b: { date: string; }) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0))
    return (
        <div className="meetups-list">
            <ul>
                {
                    meetupsList.map(item =>
                        <li key={item.date}> Datum: {item.date} Namn: {item.name}</li>  
                    )
                }
            </ul>

            <ol className="sorted-meetups-list">
               {
                   sortedmeetupsList.map((item: any) => 
                        <li className="sorted-meetups-list-item">DATE: {item.date}   NAME:  {item.name}</li>
                    )
               }
            </ol>
        </div>
    )
}

export default MeetupsView
import { Meetups } from '../database.json';
import { IMeetup } from '../models/Meetup';


export const MeetupsView = () => {
    const meetupsList = Meetups
    const sortedmeetupsList = Meetups.sort(item => Date.parse(item.date))
    return (
        <div>
            <ul>
                {
                    meetupsList.map(item =>
                        <li key={item.date}> Datum: {item.date} Namn: {item.name}</li>  
                    )
                }
            </ul>

            <ol>
                {
                    sortedmeetupsList.map(item =>
                        <li key={item.id}>DATE: {item.date}   NAME: {item.name} </li>
                    )
                }
            </ol>
        </div>
    )
}

export default MeetupsView
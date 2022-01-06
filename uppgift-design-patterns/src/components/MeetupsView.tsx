import { Meetups } from '../database.json';
import { IMeetup } from '../models/Meetup';


export const MeetupsView = () => {
    const meetupsList = Meetups
    return (
        <div>
            <ul>
                {
                    meetupsList.filter(meetup => meetup.name).map(item =>
                        <li key={item.date}> Datum: {item.date} Namn: {item.name}</li>  
                    )
                }
            </ul>
        </div>
    )
}

export default MeetupsView
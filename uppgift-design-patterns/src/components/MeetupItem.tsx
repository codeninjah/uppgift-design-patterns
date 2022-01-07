//import { Meetups } from '../database.json'
import { IMeetup } from '../models/Meetup'

const MeetupItem = ({id, name, date, comments}:IMeetup) => {
    return(
        <>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>COMMENTS: {comments}</p>
        </>
    )
}

export default MeetupItem
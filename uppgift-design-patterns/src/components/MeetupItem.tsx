import { Meetups } from '../database.json'
import { IMeetup } from '../models/Meetup'

const MeetupItem = ({id, name, date, comments}:IMeetup) => {
    return(
        <>
            <h1>{name}</h1>
            <p>{date}</p>
            <div className="hidden">
                <p>COMMENTS: {comments}</p>
                <ul>
                    {
                        comments.map(item => 
                        <li key={item}>{item}</li>)
                    }
                </ul>
                <p><button>Register</button></p>
            </div>
        </>
    )
}

export default MeetupItem
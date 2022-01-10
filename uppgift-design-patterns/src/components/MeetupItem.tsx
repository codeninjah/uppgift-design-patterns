import { Meetups } from '../database.json'
import { IMeetup } from '../models/Meetup'

const MeetupItem = ({id, name, date, comments}:IMeetup) => {
    const register = () => {
        console.log("Trying to register")
    }
    
    return(
        <>
            <h1>{name}</h1>
            <p>{date}</p>
            <div className="hidden">
                <p>COMMENTS: {comments.length}</p>
                <button onClick={register} data-test="meetups-input">Share</button>
                <input type="text" placeholder="Your comment here"></input>
                <p><button>Register</button></p>
                <ul className="kommentarer">
                    {
                        comments.map(item => 
                        <li className="kommentar" key={item}>{item}</li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default MeetupItem
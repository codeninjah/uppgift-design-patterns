import { render } from 'enzyme'
import { Meetups } from '../database.json'
import { IMeetup } from '../models/Meetup'
import { useState } from 'react'

const MeetupItem = ({id, name, date, comments}:IMeetup) => {
    let isRegistered = null;
    const register = () => {
        console.log("Trying to register")
        isRegistered = true;
    }

    return(
        <>
            <h1>{name}</h1>
            <p>{date}</p>
            <div className="hidden">
                <p>COMMENTS: {comments.length}</p>
                <button>Share</button>
                <input type="text" placeholder="Your comment here"></input>

                    {
                        isRegistered ? <></>  : <button onClick={register} data-test="meetups-input">Register</button>
                        
                    }
                
                <ul className="kommentarer">
                    {
                        comments.map(item => 
                        <li className="kommentar" key={item}>{item}</li>)
                    }
                </ul>
            </div>
        </>
    );
}



export default MeetupItem
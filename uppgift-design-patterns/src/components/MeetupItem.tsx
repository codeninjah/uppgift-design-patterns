import { render } from 'enzyme'
import { Meetups } from '../database.json'
import { IMeetup } from '../models/Meetup'
import { useState } from 'react'


const MeetupItem = ({id, name, date, comments}:IMeetup) => {

 
    return(
        <>
            <h1>{name}</h1>
            <p>{date}</p>
            <div>
                
                <p>COMMENTS: {comments.length}</p>
                
                <ul>
                    {
                        <li>{comments}</li>
                    }
                </ul>

                
            </div>
        </>
    );
}



export default MeetupItem
import { render } from 'enzyme'
import { Meetups } from '../database.json'
import { IMeetup } from '../models/Meetup'
import { useState } from 'react'


const MeetupItem = ({id, name, date, comments}:IMeetup) => {
    let a = localStorage.getItem("comments")

        return(
            <>
                <h1>{name}</h1>
                <p>{date}</p>
                <div>
                    
                    <p>COMMENTS: </p>

                    <ul>
                        {                            
                            comments.map(a => <li>{a}</li>) 
                        }
                    </ul> 

                    
                </div>
            </>
        );
}




export default MeetupItem
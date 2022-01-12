import { render } from 'enzyme'
import { Meetups } from '../database.json'
import { IMeetup } from '../models/Meetup'
import { useState } from 'react'


const MeetupItem = ({id, name, date, comments}:IMeetup) => {
    /*
    let a = localStorage.getItem("comments")
    let b 

    if(a){
        b = JSON.parse(a)
        comments = b.comments
        console.log("These are the comments " + comments)
    }
    else{
        comments = comments
    }
    */

        return(
            <>
                <h1>{name}</h1>
                <p>{date}</p>
                <div>
                    <p>COMMENTS: </p>

                    <ul>
                        {                     
                            comments.map(comments => <li>{comments}</li>) 
                        }
                    </ul> 
   
                </div>
            </>
        );
}




export default MeetupItem
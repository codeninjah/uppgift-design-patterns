import { render } from 'enzyme'
import { Meetups } from '../database.json'
import { IMeetup } from '../models/Meetup'
import { useState } from 'react'

const MeetupItem = ({id, name, date, comments}:IMeetup) => {
    let [showButton, setShowButton]  = useState(true);
    let [showCommentary, setShowCommentary] = useState(false)

    const registerBtnStuff = () => {
        const register = () => setShowButton(false);
        const commentary = () => setShowCommentary(true)
        register();
        commentary();
    }

    return(
        <>
            <h1>{name}</h1>
            <p>{date}</p>
            <div className="hidden">
                <p>COMMENTS: {comments.length}</p>

                { showCommentary ? <><button>Share</button><input type="text" placeholder="Your comment here"></input></> : <></> }
                { showButton ? <button onClick={registerBtnStuff} data-test="meetups-input">Register</button> : <></> }
                
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
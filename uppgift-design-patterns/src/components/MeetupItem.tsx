import { render } from 'enzyme'
import { Meetups } from '../database.json'
import { IMeetup } from '../models/Meetup'
import { useState } from 'react'

const MeetupItem = ({id, name, date, comments}:IMeetup) => {
    let [showButton, setShowButton]  = useState(true);
    let [showCommentary, setShowCommentary] = useState(false)

    const meetupsList = JSON.parse(JSON.stringify(Meetups))
    let [showComments, setShowComments] = useState(meetupsList)

    const registerBtnStuff = () => {
        const register = () => setShowButton(false);
        const commentary = () => setShowCommentary(true)
        register();
        commentary();
    }

    const ShareComment = () => {
        console.log("Testing test")
        console.log("This is the meetupslist")
        console.log(meetupsList) //Skriver ut hela arrayen
        console.log(meetupsList.find((el: { id: string }) => el.id == id))
        console.log("Was it one or more?") //YES
        const righmeetup = meetupsList.find((el: { id: string }) => el.id == id)
        var i = meetupsList.indexOf(righmeetup)
        console.log(righmeetup)
        console.log("This is it!")
        //righmeetup.comments.push("Test")
        setShowComments(showComments[i].push("TESTETSTSTETETSTSST"))
        
    }

    return(
        <>
            <h1>{name}</h1>
            <p>{date}</p>
            <div>
                { showButton ? <button onClick={registerBtnStuff} data-test="meetups-input">Register</button> : <></> }
                <p>COMMENTS: {comments.length}</p>
                <ul className="kommentarer">
                    {
                        comments.map(item => 
                        <li className="kommentar" key={item}>{item}</li>)
                    }
                </ul>
                        { showCommentary ? <div className="member-comment"><button  data-test="meetups-comment-btn" onClick={ShareComment}>Share</button>
                        <input type="text"  data-test="meetups-comment-field" placeholder="Your comment here"></input></div> : <></> }
            </div>
        </>
    );
}



export default MeetupItem
import { render } from 'enzyme'
import { Meetups } from '../database.json'
import { IMeetup } from '../models/Meetup'
import { useState } from 'react'

//const fs = require('fs');

const MeetupItem = ({id, name, date, comments}:IMeetup) => {
    /* let [showButton, setShowButton]  = useState(true);
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
        console.log(showComments) //Skriver ut hela arrayen
        console.log(showComments.find((el: { id: string }) => el.id == id))
        console.log("Was it one or more?") //YES
        const righmeetup = showComments.find((el: { id: string }) => el.id == id)
        var i = showComments.indexOf(righmeetup)
        console.log(righmeetup)
        console.log("This is it!")
        //righmeetup.comments.push("Test")
        //meetupsList[i].comments.push("CODENINJAH")

        //let newCommentsList = 

        showComments.map()

        //setShowComments()

        //fs.writeFileSync("../src/database.json", JSON.stringify(meetupsList[i].comments.push("TESTSTSTSTSSTSTS")))
        
    } */
 
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
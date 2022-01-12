import { render } from 'enzyme'
import { IMeetup } from '../models/Meetup'
import { useState } from 'react'

type props = { 
    id: string,
    name: string,
    date: string,
    comments: string[],
    addComment: (id:string, comment:string) => void
 }

const MeetupItem = ({id, name, date, comments, addComment}:props) => {
    let [showButton, setShowButton]  = useState(true);
    let [showCommentary, setShowCommentary] = useState(false)
    let [showComments, setShowComments] = useState(comments)
    let [inputComment, setInputComment] = useState('')

    const attendBtnStuff = () => {
        setShowButton(false);
        setShowCommentary(true)
    }

    const Comment = () => {
        let newComments = showComments
        showComments.push("Skurt")
        console.log(newComments)
        console.log(showComments)
        setShowComments(showComments)
    }
            
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
                    { showButton ? <button onClick={attendBtnStuff} data-test="meetups-input">Attend</button> : <></> }

                            { showCommentary ? <div className="member-comment"><button data-test="meetups-comment-btn" onClick={() => addComment(id, inputComment)}>Comment</button>
                            <input type="text" data-test="meetups-comment-field" placeholder="Your comment here" value={inputComment} onChange={(ev: React.ChangeEvent<HTMLInputElement>,) => setInputComment(ev.target.value)}></input></div> : <></> }
   
                </div>
            </>
        );
}




export default MeetupItem
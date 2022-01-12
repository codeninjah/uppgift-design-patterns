import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import React, {useState, useEffect} from 'react';
import { Meetups } from '../database.json';
//import { IMeetup } from '../models/Meetup';
import  MeetupItem  from './MeetupItem';
import { Props } from '../models/Meetup';

import * as fs from 'fs';

//var fs = require('fs');


export const MeetupsView = () => {
    //const meetupsList = Meetups
    const parsedmeetupsList = JSON.parse(JSON.stringify(Meetups))
    const sortedmeetupsList = parsedmeetupsList.sort((a: { date: string; },b: { date: string; }) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0))


    let [showButton, setShowButton]  = useState(true);
    let [showCommentary, setShowCommentary] = useState(false)

    const meetupsListJSON = JSON.parse(JSON.stringify(Meetups))
    let [showComments, setShowComments] = useState(meetupsListJSON)


    const registerBtnStuff = () => {
        const register = () => setShowButton(false);
        const commentary = () => setShowCommentary(true)
        register();
        commentary();
    }

    const ShareComment = (id:any) => {
        console.log("Testing test")
        console.log("This is the meetupslist")
        console.log(showComments) //Skriver ut hela arrayen
        console.log("Was it one or more?") //YES

        //Ny array och kopiera över den gamla
        console.log("Är detta nya arrayen?")
        
        let newCommentsList = showComments.map((meetup: any) =>{
            if(meetup.id === id) {
                meetup.comments.push("CODENINJAH")
                return meetup
            }
            else{
                return meetup
            }
        })

            setShowComments(newCommentsList)

            //Köra på localStorage?
            localStorage.setItem("comments", JSON.stringify(newCommentsList))    
            var a = localStorage.getItem("comments")
            console.log("a is: " + a)


            //Programmet kraschar när man kör följande for-loop
            /*
            for(var meetup in meetupsListJSON){
                fs.writeFileSync("testdatabase.json", meetup)
            }
            */
    }


    const [inputValue, setInputValue] = useState<string>("")
    //Följande funktion gör typ inget just nu
    const goToMeetup = (id: any) => {
        const meetupinterestedby = sortedmeetupsList.find((item: any) => item.id == id)
            if(meetupinterestedby){
                console.log("Alex");
                console.log(id)
                console.log(meetupinterestedby)
                console.log("Was here");
            }
    }

    //Denna funktion skall jämföra dagens datum med datumen för meetups'en
    //Borde skriva tester innan jag fortsätter bygga ut den
    const dateCompare = (eventDate: any) => {
        const todaysDate = new Date().toISOString().split('T')[0]
        const todaysDateYear = todaysDate.split("-")[0]
        const todaysDateMonth = todaysDate.split("-")[1]
        const todaysDateDay = todaysDate.split("-")[2]

        const testDate = eventDate.split('T')[0]
        const testDateYear = testDate.split("-")[0]
        const testDateMonth = testDate.split("-")[1]
        const testDateDay = testDate.split("-")[2]
        console.log(testDateDay)
    }

    dateCompare("2020-10-10")

    return (
        <>
        <div>
          <div className="inputContainer">
            <label htmlFor="">Search</label>
            <input 
            type="text"
            data-test="meetups-input"
            value={inputValue}
            onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setInputValue(ev.target.value)}
          />
        </div>
            <div className="meetups-list">

                {/* <ol className="sorted-meetups-list">
                {
                    sortedmeetupsList.filter((item: any) => item.date.includes(inputValue)).map((item: any) => 
                            <li className="sorted-meetups-list-item">DATE: {item.date}   NAME:  {item.name}</li>
                        )
                }
                </ol> */}

                <ol className="sorted-meetups-list-test">
                {
                    sortedmeetupsList.filter((item: any) => item.date.includes(inputValue)).map((item: any) => 
                            <li>
                                <article key={item.id} onClick={() => goToMeetup(item.id)}>
                                    <MeetupItem key={item.id} id={item.id} name={item.name} date={item.date} comments={item.comments} />
                                        { showButton ? <button onClick={registerBtnStuff} data-test="meetups-input">Register</button> : <></> }
                                       
                            {/* Följande har bortkommenterats för att få applikationen att köra igång */}
                               {/* <ul className="kommentarer">
                                {
                                    meetupsListJSON.map((item:any) => <li className="kommentar" key={item}>{item.date}</li>)                                   
                                }
                            </ul>  */}  

                                { showCommentary ? <div className="member-comment"><button  data-test="meetups-comment-btn" onClick={() => ShareComment(item.id)}>Share</button>
                                <input type="text"  data-test="meetups-comment-field" placeholder="Your comment here"></input></div> : <></> }
                                </article>
                            </li>
                            
                        )
                }
                </ol>

            </div>
        </div>
        </>
    )
}

export default MeetupsView
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

//const IMeetup = require('./models/Meetup')

let DateGenerator = require('random-date-generator');
DateGenerator.getRandomDate(); // random date

let startDate = new Date(2021, 6, 30);
let endDate = new Date(2022, 1, 20);
//DateGenerator.getRandomDateInRange(startDate, endDate); // random date in range






let meetups = [
    "AWS",
    "Code along with David",
    "Coder's meetup",
    "NASA's spaceshuttle launch",
    "Elon's next big announcement",
    "Microsoft's Visual Studio 2022 launch",
    "SpaceX",
    "How to become an entrepreneur",
    "TED talks: Our Green Planet",
    "CryptoTalks"
]

let meetupstestArr = []

for(var meetup of meetups){
    //console.log(meetup)
    meetupstestArr.push({
        "id": uuidv4(),
        "name": meetup,
        "date": DateGenerator.getRandomDateInRange(startDate, endDate),
        "comments": []
        })
}

for(var meetuptest of meetupstestArr){
    console.log("Id: " + meetuptest.id + " Name: " + meetuptest.name)
    console.log("Date: " + meetuptest.date + " Comments: " + meetuptest.comments)
    fs.writeFileSync("testdatabase.json", JSON.stringify(meetuptest))
}





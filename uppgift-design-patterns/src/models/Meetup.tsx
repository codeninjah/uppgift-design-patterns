
export interface IMeetup {
    id: string,
    name: string,
    date: Date,
    comments: [],
}

/*
export type Props = {
    view: (item: IMeetup) => void
}
*/

const m1: IMeetup = {
    id: "12345",
    name: "ALex",
    date: new Date(),
    comments: []
}

export interface IMeetup {
    id: string,
    name: string,
    date: Date,
    comments: [],
}


export type Props = {
    view: (item: IMeetup) => void
}



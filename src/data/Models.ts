export interface IssuesFromApi{
    assignee: {};
    comments: number;
    number: number
    id: string;
    state: string;
    title: string;
    updated_at: string;
}

// export interface IssuesInApp {
//     assignee_login:string;
//     comments:number;
//     number:number
//     id:number;
//     title:string;
//     updated_at:string|Date;
// }

export interface Issues {
    id: string
    title: string;
    assignee_login:string;
    comments:number;
    number:number
    updated_at:string;

}

export interface Kanboard {
    id: string;
    tasks: Issues[];
}
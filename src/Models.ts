export interface IssuesFromApi{
    assignee:{};
    comments:number;
    number:number
    id:number;
    state:string;
    title:string;
    updated_at:string|Date;
}

export interface IssuesInApp {
    assignee_login:string;
    comments:number;
    number:number
    id:number;
    state:string;
    title:string;
    updated_at:string|Date;
}
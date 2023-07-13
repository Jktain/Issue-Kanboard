export interface Issues {
    id: string
    title: string;
    assignee_login:string;
    state: string;
    comments:number;
    number:number
    updated_at:string;
}

export interface Kanboard {
    id: string;
    tasks: Issues[];
}
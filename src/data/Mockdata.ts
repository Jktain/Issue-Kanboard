import { Kanboard } from "./Models";

export const Mockdata:Kanboard[] = [
    {
        id: "1",
        tasks: [
            {
                id:"1",
                title: 'Learn CSS',
                assignee_login:'der',
                comments:2,
                number:314,
                updated_at:'3 days ago',
                state:'open'
            },
            {
                id:"2",
                title: 'Learn Golang',
                assignee_login: 'wasder',
                comments:3,
                number:315,
                updated_at:'2 days ago',
                state:'open'
            }
        ]
    },
    {
        id: "2",
        tasks: [
            {
                id:"3",
                title: 'LwdaS',
                assignee_login:'sawder',
                comments:2,
                number:316,
                updated_at:'3 days ago',
                state:'open'
            },
            {
                id:"4",
                title: 'Learn 0dwas',
                assignee_login: 'derwas',
                comments:4,
                number:317,
                updated_at:'3 days ago',
                state:'open'
            }
        ]
    },
    {        
        id: "3",
        tasks: [
            {
                id:"5",
                title: ' CSS',
                assignee_login:'der',
                comments:2,
                number:318,
                updated_at:'3 days ago',
                state:'open'
            },
            {
                id:"6",
                title: '] Golang',
                assignee_login:'der',
                comments:2,
                number:312,
                updated_at:'3 days ago',
                state:'open'
            }
        ]
    }
]
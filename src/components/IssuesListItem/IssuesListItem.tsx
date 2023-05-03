interface IssueProps{
    children: {
    title: string;
    assignee_login:string;
    comments:number;
    number:number
    updated_at:string
    }
}

export const IssuesListitem = ({children}:IssueProps) => {
    return (
        <div className='issues-list-item'>
            <span>{children.title}</span>
            <span className='item-spn'>#{children.number}   {children.updated_at}</span>
            <span className='item-spn'>{children.assignee_login}   |    {children.comments} comments</span>
        </div>
    )
}
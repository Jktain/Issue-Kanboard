import React from 'react';

export const IssuesListitem = () => {
    return (
        <div className='issues-list-item'>
            <span>Some issue title</span>
            <span className='item-spn'>#315   Opened 3 days ago</span>
            <span className='item-spn'>Admin   |    Comments: 3</span>
        </div>
    )
}
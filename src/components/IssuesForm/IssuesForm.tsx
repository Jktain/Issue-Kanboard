import React from 'react';
import { IssuesListitem } from '../IssuesListItem/IssuesListItem';

export const IssuesForm = () => {
    return (
        <div className='issues-form'>
            <div className='issues-column'>
                <IssuesListitem/>
            </div>
            <div className='issues-column center-column'>
                <IssuesListitem/>
                <IssuesListitem/>
                <IssuesListitem/>
            </div>
            <div className='issues-column'>
                <IssuesListitem/>
                <IssuesListitem/>
            </div>
        </div>
    )
}
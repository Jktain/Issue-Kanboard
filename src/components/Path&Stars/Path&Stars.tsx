import React from 'react';

export const PathStars = () => {
    const Path:string = 'Facebook > React';
    return (
        <div>
            <span className='spn'>{Path}</span>
            <span className='font'>194 K stars</span>
        </div>
    );
}
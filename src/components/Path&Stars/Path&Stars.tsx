import React from 'react';

export const PathStars = () => {
    const URL:string = 'https://github.com/microsoft/vscode';

    const urlEdit = (url:string, number:number) => {
        return(`${url.split('/')[number][0].toUpperCase()}${url.split('/')[number].substring(1).toLowerCase()}`);   
    }

    return (
        <div>
            <a href={`https://github.com/${URL.split('/')[3]}`} className='a'>{urlEdit(URL, 3)}</a>
            <span className='a'>{' > '}</span>
            <a href={URL} className='a'>{urlEdit(URL, 4)}</a>
            <span className='font'>{`194 K star`}</span>
        </div>
    );
}
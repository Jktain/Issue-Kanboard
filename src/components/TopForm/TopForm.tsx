import React from 'react';
import './TopForm.css';

export const TopForm = () => {

    const token:string = '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',
          url:string = 'https://github.com/microsoft/vscode';

    const IssueApi:string = `https://api.github.com/repos${url.slice(18)}/issues`; 
    // console.log(IssueApi);'
    // const parts = url.split('/')[3];
    // const owner = parts[3];
    console.log(`https://github.com/${url.split('/')[3]}`);

    fetch(IssueApi, {
        headers: {
        Authorization: `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  
    return(
        <div className='top-form'>
            <input className='inp font' placeholder='Enter repo URL'></input>
            <button className='btn font'>Load issues</button>
        </div>
    )
}
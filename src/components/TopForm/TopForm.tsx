import React, {useEffect, useState} from 'react';
import './TopForm.css';
import { IssuesFromApi, IssuesInApp } from '../../Models';

export const TopForm = () => {

    const [URL, setURL] = useState('');

    const changeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setURL(event.target.value);

    }

    // const url:string = 'https://github.com/microsoft/vscode';
    // let issueApi:string = '';

    // console.log(`https://github.com/${url.split('/')[3]}`);

    let issueList:IssuesFromApi[] = [];

    function getDataFromAPI(): Promise<IssuesFromApi[]> {
        return fetch(`https://api.github.com/repos${URL.slice(18)}/issues`)
                .then(response => response.json())
                .then(data => {
                    const objMass: IssuesFromApi[] = data.map((item: any) => {
                        const obj: IssuesFromApi = {
                            id: item.id,
                            state: item.state,
                            title: item.title,
                            number: item.number,
                            updated_at: item.updated_at,
                            assignee: item.assignee,
                            comments: item.comments
                        };
                        return obj;
                    });
                    return objMass;
        });
    }

    fetch(`https://api.github.com/repos${URL.slice(18)}`)
     .then(response => response.json())
     .then(data => console.log(data))

    const getUrl = (event:React.FormEvent) => {
        event.preventDefault();
        console.log(URL);
        getDataFromAPI()
            .then(data => {
                issueList.push(...data);
                console.log(issueList); // тут виводимо масив з обробленими даними
            })
            .catch(error => console.error(error));
    }
        
    return(
        <form onSubmit={getUrl}
            className='top-form'
            >
            <input 
                className='inp' 
                placeholder='Enter repo URL'
                value={URL}
                onChange={changeInput}
            />

            <button 
                className='btn'
                type="submit">
                Load issues
            </button>
        </form>
    )
}
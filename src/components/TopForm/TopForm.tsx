import React, {useState} from 'react';
import './TopForm.css';
import { IssuesFromApi} from '../../data/Models';

export const TopForm = () => {

    const [URL, setURL] = useState('');
    
    let issueList:IssuesFromApi[] = [];
    
    const changeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setURL(event.target.value);

    }

    const getIssuesFromAPI = ():Promise<IssuesFromApi[]> => {
        return fetch(`https://api.github.com/repos${URL.slice(18)}/issues`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
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

    const getUrl = async(event:React.FormEvent) => {
        event.preventDefault();
        console.log(URL);
        
        try {
            const response = await fetch(`https://api.github.com/repos${URL.slice(18)}`);
            const data = await response.json();
            console.log(data.stargazers_count);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
        
        try {
            const data = await getIssuesFromAPI();
            issueList = data;
            console.log(issueList); 
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // console.log(issueList);
        
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
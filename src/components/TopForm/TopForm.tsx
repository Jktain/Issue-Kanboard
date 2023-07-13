import React, {useState, FormEvent} from 'react';
import './TopForm.css';
// import { FormEvent } from 'react';
// import { getData } from '../GetURL/GetURL';

export const TopForm = () => {

    const [URL, setURL] = useState('');
    
    const changeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setURL(event.target.value);
    }

    const onsub = (e:FormEvent) => {
        e.preventDefault();
        console.log(URL);
    }
    // const getUrl = (e:FormEvent) => {
    //     e.preventDefault();
    //     getData(URL);
    // }
        
    return(
        <form 
            className='top-form'
            onClick={onsub}
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
import fetch from 'isomorphic-fetch';
import {API} from '../config';

export const signup = (user) => {
    return fetch("http://localhost:8000/api/signup", {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res =>{
        return res.json()
    })
    .catch(err => console.log(err));  
};
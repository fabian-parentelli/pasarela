import { url } from '../variable.api.js';

export async function getUserByIdApi(id) {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/user/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return(content.data.user);
};
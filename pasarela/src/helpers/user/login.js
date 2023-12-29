import { url } from '../utils.helpers.js';

async function loginApi(values) {

    const response = await fetch(`${url}/api/user/login`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    if(content.data) return content.data;
    if(content.error) return content;
};

export { loginApi };
import { url } from '../variable.api.js';
import modalWatch from '../../javaScript/utild/modal.js';

export async function recoverPass(formWhatEmail) {
    const modal = document.querySelector('.modal');
    formWhatEmail.addEventListener('submit', async (e) => {
        e.preventDefault();
        const user = Object.fromEntries(new FormData(formWhatEmail));

        const response = await fetch(`${url}/api/user/recover_password`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const content = await response.json();
        console.log(content);

        if (content.error) {
            modalWatch(content.error, 'asset');
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                localStorage.setItem('reloadLogin', 'true');
                window.location.reload(); 
            }, 3000);
        };

        if (content.data.status === 'success') {
            localStorage.setItem('token', content.data.accesToken);
            modalWatch('Te hemos enviado un email con un link');
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                localStorage.setItem('reloadLogin', 'true');
                window.location.reload('/');
            }, 3000);
        };
    });
};
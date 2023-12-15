import modalWatch from "../../javaScript/utild/modal.js";
import { url } from "../variable.api.js";

const main = document.querySelector('#main');

function loginApi(formLogin) {
    const modal = document.querySelector('.modal');
    formLogin.addEventListener('submit', async (e) => {
        e.preventDefault();
        const user = Object.fromEntries(new FormData(formLogin));

        const response = await fetch(`${url}/api/user/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const content = await response.json();

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
            modalWatch('El registro fué exitoso');
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                window.location.reload();
            }, 3000);
        };
    });
};

export { loginApi };
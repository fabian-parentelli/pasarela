import { url } from "../variable.api.js";
import modalWatch from "../../javaScript/utild/modal.js";

const token = localStorage.getItem('token');

export async function updateUserApi(form) {
    const modal = document.querySelector('.modal');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const user = Object.fromEntries(new FormData(form));

        const response = await fetch(`${url}/api/user`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const content = await response.json();

        if (content.error) {
            modalWatch(content.error, 'asset');
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                window.location.reload();
            }, 3000);
        };

        if (content.data.status === 'success') {
            modalWatch('La modificación ha sido correcta');
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                window.location.replace('/');
            }, 3000);
        };
    });
};
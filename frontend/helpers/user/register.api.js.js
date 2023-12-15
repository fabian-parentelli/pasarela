import modalWatch from "../../javaScript/utild/modal.js";
import { url } from "../variable.api.js";

function registerApi(formRegister) {
    const modal = document.querySelector('.modal');
    formRegister.addEventListener('submit', async (e) => {
        e.preventDefault();
        const user = Object.fromEntries(new FormData(formRegister));

        if (user.password !== user.confirmPassword) {
            modalWatch('La contraseña no es igual', 'asset');
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                window.location.reload();
            }, 3000);
            return;
        };
        delete user.confirmPassword;

        const response = await fetch(`${url}/api/user/register`, {
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
                window.location.reload();
            }, 3000);
        };

        if (content.data.status === 'success') {
            modalWatch('El registro fué exitoso');
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                window.location.replace('/');
            }, 3000);
        };
    });
};

export { registerApi };
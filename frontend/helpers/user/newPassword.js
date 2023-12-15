import { url } from '../variable.api.js';
import modalWatch from '../../javaScript/utild/modal.js';

export async function newPasswordApi(token, formNewPass) {
    const modal = document.querySelector('.modal');
    formNewPass.addEventListener('submit', async (e) => {
        e.preventDefault();
        const userPass = Object.fromEntries(new FormData(formNewPass));

        if (userPass.password == userPass.passConfirm) {
            delete userPass.passConfirm;
            const response = await fetch(`${url}/api/user/new_password`, {
                method: 'PUT',
                body: JSON.stringify(userPass),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const content = await response.json();

            if (content.error) {
                localStorage.setItem('fromNewPass', token);
                modalWatch(`${content.error}`, 'error');
                modal.classList.add('modal--show');
                setTimeout(() => {
                    modal.classList.remove('modal--show');
                    window.location.reload('/');
                }, 3000);
            };

            if (content.data.status === 'success') {
                modalWatch('Cambio de contraseña exitoso');
                modal.classList.add('modal--show');
                setTimeout(() => {
                    modal.classList.remove('modal--show');
                    localStorage.setItem('reloadLogin', 'true');
                    window.location.reload('/');
                }, 3000);
            };

        } else {
            modalWatch('La contraseña ingresada en ambos campos no son iguales', 'error');
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                localStorage.setItem('fromNewPass', 'fromNewPass');
                window.location.reload('/');
            }, 3000); s
        }
    });
};
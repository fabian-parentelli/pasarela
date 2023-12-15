import { regsiter } from '../../pages/user/register.js';
import { login } from '../../pages/user/login.js';
import { updateUser } from '../../pages/user/updateUser.js';
import { getUrl, deleteUrl } from './getUrl.js';
import { recoverPassword } from '../../pages/user/recoverPassword.js';

const reloadLogin = localStorage.getItem('reloadLogin');
const formNewPass = localStorage.getItem('fromNewPass');
const urlToken = getUrl();

export function main() {
    const registerDiv = document.querySelectorAll('.registerId');
    const loginDiv = document.querySelectorAll('.loginDiv');
    const updateUserDiv = document.querySelectorAll('.updateUserDiv');

    usersAll();
    registerDiv.forEach((prod) => prod.addEventListener('click', regsiter)); // Registro
    loginDiv.forEach((prod) => prod.addEventListener('click', login)); // Login
    updateUserDiv.forEach((prod) => prod.addEventListener('click', updateUser)); // updateUser
};

function usersAll() {
    if (reloadLogin) { // verifico si estaba en el menu login, me vuelve a llevar ahí.
        localStorage.removeItem('reloadLogin');
        login();
    };
    if (formNewPass) {
        const urlToken = localStorage.getItem('fromNewPass');
        localStorage.removeItem('fromNewPass');
        recoverPassword(urlToken);
    };
    if (urlToken) { // Limpia la url y te traslada hacia el recoverPass.
        deleteUrl();
        recoverPassword(urlToken);
    };
};
import { regsiter } from './register.js';
import { loginApi } from '../../../helpers/user/login.api.js';
import { whatEmail } from '../user/whatEmail.js';
import modalWatch from '../../utild/modal.js';

export function login() {
    const modal = document.querySelector('.modal');

    headerDiv.innerHTML = '';
    main.innerHTML = '';

    const lsit = document.querySelector('.menu_links');
    lsit.classList.remove('menu_links--show');

    const divLogin = document.createElement('div');
    divLogin.className = 'divLogin';
    divLogin.innerHTML = `
        <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701540528/assets/iehjdrxcbadnaq6ltxaw.png"/>
        <form id="formLogin">
            <h2>Inicia sesión en <span>Pasarela</span></h2>
            <div>
                <label>Email</label>
                <input type="email" name="email" placeholder="Este campo debe ser completado" required>
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" name="password" placeholder="Este campo debe ser completado" required>
            </div>
            <div class='butDivLogin'>
                <button class="btn-green" type="submit">Iniciar sesión</button>
                <button id="goToRegister" class="btn-blue">Regístrate</button>
            </div>
            <p id="whatsEmail">Recuperar tu constraseña</p>
        </form>
    `;
    main.appendChild(divLogin);
    const goToRegister = document.querySelector('#goToRegister');
    goToRegister.addEventListener('click', regsiter);
    const token = localStorage.getItem('token');

    if (!token) {
        const formLogin = document.querySelector('#formLogin');
        loginApi(formLogin);
    } else {
        modalWatch('Ya te encuentras registarod');
        modal.classList.add('modal--show');
        setTimeout(() => {
            modal.classList.remove('modal--show');
            window.location.reload();
        }, 2000);
    };
    const whatsEmail = document.querySelector('#whatsEmail');
    whatsEmail.addEventListener('click', whatEmail);
}; 
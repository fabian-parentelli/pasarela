import { login } from "./login.js";
import { registerApi } from '../../../helpers/user/register.api.js.js';

export function regsiter() {
    headerDiv.innerHTML = '';
    main.innerHTML = '';

    const lsit = document.querySelector('.menu_links'); // Con esto cierro el menú hamburguesa.
    lsit.classList.remove('menu_links--show')           // Con esto cierro el menú hamburguesa.

    const div = document.createElement('div');
    div.className = 'register';
    div.innerHTML = `
        <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701524335/assets/rie8tui07mdhcihiopzl.png">
        <div class="reg-right">
            <h2>Registrate en <span>Pasarela</span></h2>
            <form id="newFormRegister" class="formRegister">
                <div class="subDiv">
                    <div>
                        <label>Nombre</label>
                        <input type="text" name="name" placeholder="Este campo debe ser completado" required>
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input type="text" name="lastName" placeholder="Este campo debe ser completado" required>
                    </div>
                </div>
                <div class="subDiv">
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Este campo debe ser completado" required>
                    </div>
                    <div>
                        <label>Teléfono</label>
                        <input type="text" name="phone" placeholder="Este campo debe ser completado" required>
                    </div>
                </div>
                <div class="subDiv">
                    <div>
                        <label>Contraseña</label>
                        <input type="password" name="password" placeholder="Este campo debe ser completado" required>
                    </div>
                    <div>
                        <label>Confirmar Contraseña</label>
                        <input type="password" name="confirmPassword" placeholder="Este campo debe ser completado" required>
                    </div>
                </div>
                <div class='butDiv'>
                    <input class="btn-green" type="submit" value="registrarte">
                    <button id="login" class="btn-blue">Iniciar sesión</button>
                </div>
            </form>
        </div>
    `;
    main.appendChild(div);
    const loginDiv = document.querySelector('#login');
    loginDiv.addEventListener('click', login);

    const formRegister = document.querySelector('#newFormRegister');
    registerApi(formRegister);
}; 
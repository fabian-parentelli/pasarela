import { newPasswordApi } from '../../../helpers/user/newPassword.js';

export function recoverPassword(token) {
    headerDiv.innerHTML = '';
    main.innerHTML = '';

    const recPassDiv = document.createElement('div');
    recPassDiv.className = 'recPassDiv';
    recPassDiv.innerHTML = `
        <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701886855/assets/iqh35dcjmeihh5d5qagi.png"/>
        <form id="formRecPass">
            <h2>Recupera tu contraseña</h2>
            <div>
                <label>Nueva Contraseña</label>
                <input type="password" name="password" placeholder="Este campo debe de ser completado" required/>
            </div>
            <div>
                <label>Repite la contraseña</label>
                <input type="password" name="passConfirm" placeholder="Este campo debe de ser completado" required/>
            </div>
            <input class="btn-blue btn" type="submit" value="Recuperar contraseña">
        </form>
    `;
    main.appendChild(recPassDiv);
    const formNewPass = document.querySelector('#formRecPass');
    newPasswordApi(token, formNewPass);
};
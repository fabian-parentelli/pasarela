import { recoverPass } from '../../../helpers/user/recoverPass.js';

export function whatEmail() {
    headerDiv.innerHTML = '';
    main.innerHTML = '';

    const whatEmailDIv = document.createElement('div');
    whatEmailDIv.className = 'whatEmail';
    whatEmailDIv.innerHTML = `
        <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701888664/assets/ykl9vsrtlzidyttcouma.png"/>
        <form id="formWhatEmail">
            <h2>Recupermos tus datos</h2>
            <div>
                <label>Cual es tu email</label>
                <input type="text" name="email" placeholder="Este campo debe de ser completado" required/>
            </div>
            <input class="btn-blue btn" type="submit" value="Recuperar contraseña">
        </form>
    `;
    main.appendChild(whatEmailDIv);
    const formWhatEmail = document.querySelector('#formWhatEmail');
    recoverPass(formWhatEmail);
};
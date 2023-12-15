import { currentApi } from '../../../helpers/user/current.api.js';
import { getUserByIdApi } from '../../../helpers/user/getUserById.js';
import { updateUserApi } from '../../../helpers/user/updateUser.api.js';
import modalWatch from '../../utild/modal.js';
const modal = document.querySelector('.modal');



export async function updateUser() {
    const user = await currentApi();
    if (!user) {
        modalWatch('Tienes que estar logueado para poder modificar tus datos', 'asset');
        modal.classList.add('modal--show');
        setTimeout(() => {
            modal.classList.remove('modal--show');
            localStorage.setItem('reloadLogin', 'true');
            window.location.reload(); 
        }, 3000);
    };

    headerDiv.innerHTML = '';
    main.innerHTML = '';
    const lsit = document.querySelector('.menu_links'); // Con esto cierro el menú hamburguesa.
    lsit.classList.remove('menu_links--show')           // Con esto cierro el menú hamburguesa.

    const updateUserDiv = document.createElement('div');
    updateUserDiv.className = 'register';
    updateUserDiv.innerHTML = `
        <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701719039/assets/nktmwlo8kkr2lckrchau.png">
        <div class="reg-right">
            <h2>Modifica tus datos</h2>
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
                <div class='butDiv'>
                    <input class="btn-green" type="submit" value="modificar">
                </div>
            </form>
        </div>
    `;
    main.appendChild(updateUserDiv);

    const formRegister = document.querySelector('#newFormRegister');
    completeValue(formRegister, user);
    updateUserApi(formRegister);
};

export async function completeValue(formRegister, user) {
    const userById = await getUserByIdApi(user.user._id);
    if (userById) {
        formRegister.querySelector('[name="name"]').value = userById.name;
        formRegister.querySelector('[name="lastName"]').value = userById.lastName;
        formRegister.querySelector('[name="email"]').value = userById.email;
        formRegister.querySelector('[name="phone"]').value = userById.phone;
    };
};
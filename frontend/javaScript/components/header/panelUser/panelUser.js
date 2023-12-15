import { currentApi } from '../../../../helpers/user/current.api.js';
import { getUserByIdApi } from '../../../../helpers/user/getUserById.js';
import { consola } from '../../consola/consola.js';

export async function panelUser() {
    const consoles = document.querySelector('#consoles');

    const data = await currentApi();
    let user;
    if (data) { user = await getUserByIdApi(data.user._id) };
    let panelDiv;

    if (user) {
        panelDiv = document.createElement('div');
        panelDiv.className = 'panelDiv';
        panelDiv.innerHTML = `
            <p class="panelDivName"></p>
            <ul class="menu_linksA">
                <li class='menu_itemA menu_item--showA'>
                    <a href='#' class='menu_linkA'>Proyecto <img src="./frontend/assets/arrow.png" class="menu_arrowA"/></a>
                    <ul class='menu_nestingA nestingA'>
                        <li id="newProject" class='menu_insideA'><a class='menu_link menu_link--inside' href='#'>Crear</a></li>
                        <li class='menu_insideA'><a class='menu_link menu_link--inside' href='#'>Ver</a></li>
                    </ul>
                </li>
                <li class='menu_itemA menu_item--showA'>
                    <a href='#' class='menu_linkA'>Plataforam <img src="./frontend/assets/arrow.png" class="menu_arrowA"/></a>
                    <ul class='menu_nestingA'>
                        <li class='menu_insideA'><a class='menu_link menu_link--inside' href='#'>Datos financieros</a></li>
                        <li class='menu_insideA'><a class='menu_link menu_link--inside' href='#'>Estado de cuenta</a></li>
                    </ul>
                </li>
                <li class='menu_itemA menu_item--showA'>
                    <a href='#' class='menu_linkA'>Crear evento <img src="./frontend/assets/arrow.png" class="menu_arrowA"/></a>
                    <ul class='menu_nestingA'>
                        <li class='menu_insideA'><a class='menu_link menu_link--inside' href='#'>Crear Evento</a></li>
                        <li class='menu_insideA'><a class='menu_link menu_link--inside' href='#'>Ver eventos</a></li>
                    </ul>
                </li>
            </ul>
            <img class="exit" src="./frontend/assets/exit.png" alt="emergency-exit"/>
        `;
        headerDiv.appendChild(panelDiv);
        const panelDivName = document.querySelector('.panelDivName');
        panelDivName.textContent = `Hola ${user.name}!!!`;

        consola(consoles);

        const exit = document.querySelector('.exit');
        exit.addEventListener('click', () => {
            localStorage.removeItem('token');
            headerDiv.removeChild(panelDiv);
        });
    } else {
        panelDiv && headerDiv.removeChild(panelDiv);
    };
};
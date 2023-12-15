import { hambNav } from "./hambNav.js";
import { scrollFunction } from './scroll.nav.js'

const nav = document.querySelector('#nav');

export function navigator() {
    const browser = document.createElement('div');
    browser.className = 'browser';
    browser.innerHTML = `
        <img id='logoImg' src='./frontend/assets/logoArgentina.png' alt='Pasarela'/>
        <ul class="menu_links">
        
            <li class='menu_item menu_item--show'>
                <a href='#' class='menu_link'>Información <img src="./frontend/assets/arrow.png" class="menu_arrow"/></a>
                <ul class='menu_nesting'>
                    <li class='menu_inside'><a class='menu_link menu_link--inside' href='#'>Usuario</a></li>
                    <li class='menu_inside'><a class='menu_link menu_link--inside' href='#'>Mercado</a></li>
                    <li class='menu_inside'><a class='menu_link menu_link--inside' href='#'>Nosotros</a></li>
                </ul>
            </li>

            <li class='menu_item menu_item--show'>
                <a href='#' class='menu_link'>Mercado <img src="./frontend/assets/arrow.png" class="menu_arrow"/></a>
                <ul class='menu_nesting'>
                    <li class='menu_inside'><a class='menu_link menu_link--inside' href='#'>Ver Mercado</a></li>
                    <li class='menu_inside'><a class='menu_link menu_link--inside' href='#'>Publicar</a></li>
                    <li class='menu_inside'><a class='menu_link menu_link--inside' href='#'>Información</a></li>
                </ul>
            </li>
            <li class='menu_item menu_item--show'>
                <a href='#' class='menu_link'>Usuario <img src="./frontend/assets/arrow.png" class="menu_arrow"/></a>
                <ul class='menu_nesting'>
                    <li class='menu_inside loginDiv'><a class='menu_link menu_link--inside' >Inisiar Sesión</a></li>
                    <li class='menu_inside registerId'><a class='menu_link menu_link--inside' href='#'>Registarte</a></li>
                    <li class='menu_inside updateUserDiv'><a class='menu_link menu_link--inside' href='#'>Modifca tus datos</a></li>
                    <li class='menu_inside'><a class='menu_link menu_link--inside' href='#'>Tu Página</a></li>
                    <li class='menu_inside'><a class='menu_link menu_link--inside' href='#'>Crear Evento</a></li>
                </ul>
            </li>
        </ul>
        <div class='menu_hamburguer'>
            <img class="menu_img" src='./frontend/assets/menu.png' alt="menu--v3"/>
        </div>
    `;
    nav.appendChild(browser);
    hambNav();

    const logoImg = document.querySelector('#logoImg');
    logoImg.addEventListener('click', () => window.location.href = 'index.html');
};

scrollFunction(nav);
import { scrollFunction } from "./scroll.nav.js";

export function hambNav() {
    const listElement = document.querySelectorAll('.menu_item--show');
    const lsit = document.querySelector('.menu_links');
    const menu = document.querySelector('.menu_hamburguer');

    const addClick = () => {
        listElement.forEach((element) => {
            element.addEventListener('click', () => {
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu_item--active');
                if (subMenu.clientHeight === 0) height = subMenu.scrollHeight;
                subMenu.style.height = `${height}px`;
            });
        });
    };
    const deleteSyleHeight = () => {
        listElement.forEach((element) => {
            if (element.children[1].getAttribute('style')) {
                element.children[1].removeAttribute('style');
                element.classList.remove('menu_item--active');
            };
        });
    };
    window.addEventListener('resize', () => {
        if (window.innerHeight > 767) {
            deleteSyleHeight();
            if (listElement.classList.contains('menu_links--show')) {
                listElement.classList.remove('menu_links--show');
            };
        } else {
            addClick();
        };
    });
    if (window.innerHeight <= 767) addClick();
    menu.addEventListener('click', () => lsit.classList.toggle('menu_links--show'));
};
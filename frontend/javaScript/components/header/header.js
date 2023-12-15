import { carousel } from "./carousel/carousel.js";
import { panelUser } from './panelUser/panelUser.js';

const headerDiv = document.querySelector('#headerDiv');

export function header() {
    carousel();
    panelUser();
}; 
import { logicCarousel } from './logicCarousel.js';

export function carousel() {
    const carrusel = document.createElement('section');
    carrusel.className = 'carrusel';
    carrusel.innerHTML = `
        <div class="carrusel-interno">
            <div id="principal">
                <div id="progress-bar-container">
                    <div id="progress-bar"></div>
                </div>

                <div id="slideshow">
                    <img src="" alt="" id="img1" class="imagenes">
                    <img src="" alt="" id="img2" class="imagenes">
                </div>

                <div id="indicadores"></div>
            </div>
        </div>
    `;
    headerDiv.appendChild(carrusel);
    logicCarousel();
};
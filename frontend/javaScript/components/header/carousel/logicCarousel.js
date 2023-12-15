export function logicCarousel() {
    const imagenes = [
        'https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701520410/carrusel/wt8mrmpdvkymxiujqdsm.png',
        'https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701520074/carrusel/wqldcq0ij21kwh1ck5lq.png',
        'https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701516352/carrusel/zkw43upfxyejteztvwok.png',
        'https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701516352/carrusel/ka5g5atrqctlynzueknh.png',
        'https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701516352/carrusel/yobwoqmljfvgdleegp3j.png'
    ];

    let index = 1;
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const progressBar = document.querySelector("#progress-bar");
    const divIndicadores = document.querySelector("#indicadores");

    let porcentajeBase = 100 / imagenes.length;
    let porcentajeActual = porcentajeBase;

    for (let i = 0; i < imagenes.length; i++) {
        const div = document.createElement("div");
        div.classList.add("circles");
        div.id = i;

        divIndicadores.appendChild(div);
    };

    progressBar.style.width = `${porcentajeBase}%`;
    img1.src = imagenes[0];
    const circulos = document.querySelectorAll(".circles");
    circulos[0].classList.add("resaltado");

    const slideShow = () => {
        img2.src = imagenes[index];
        const circuloActual = Array.from(circulos).find(el => el.id == index);
        Array.from(circulos).forEach(cir => cir.classList.remove("resaltado"));
        circuloActual.classList.add("resaltado");

        img2.classList.add("active");
        index++;
        porcentajeActual += porcentajeBase;
        progressBar.style.width = `${porcentajeActual}%`;
        if (index === imagenes.length) {
            index = 0;
            porcentajeActual = porcentajeBase - porcentajeBase;
        };

        setTimeout(() => {
            img1.src = img2.src;
            img2.classList.remove("active");
        }, 1000);
    };

    setInterval(slideShow, 4000);
};
import { navigator } from "./components/nav/nav.js";
import { footer } from "./components/footer/footer.js";
import { header } from "./components/header/header.js";
import { main } from "./components/main/main.js"; 
import { consola } from "./components/consola/consola.js";

window.addEventListener('DOMContentLoaded', () => {
    navigator();
    footer();
    header();
    main();
    consola();
});
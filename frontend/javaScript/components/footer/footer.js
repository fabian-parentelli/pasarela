const footerDiv = document.querySelector('#footer');

export function footer() {
    const foot = document.createElement('div');
    foot.className = 'foot';
    foot.innerHTML = `
        <div class='footerUp'>
            <div class='fottWe'>
                <img id='logoImg' src='./frontend/assets/logoArgentina.png' alt='Pasarela'/>
                <p>En Pasarella trabajamos arduamente en la construcción de un sitio seguro para la interacción entre productores y clientes. Brindamos servicios de venta de entradas, alquiler de salas de ensayo, estudios de grabación, teatro y otros relacionados al arte. Además contamo con un mercado de productos realcionados al arte.</p>

                <div class='footnetWorks'>
                    <div class='footInstagrame'></div>
                    <div class='footFacebook'></div>
                    <div class='footYouTube'></div>
                    <div class='footTikTok'></div>
                </div>

                <div class='footWhatsapp'>
                    <img src='./frontend/assets/whatsapp.png' alt='whatsapp'/>
                    <p>WhatsApp</p>
                </div>
            </div>

            <div class='separador'></div>

            <div class='footCards'>
                <div class='footCards_children'>
                    <h2>Categorías</h2>
                    <ul>
                        <li><a href='#'>Música</a></li>
                        <li><a href='#'>Teatro</a></li>
                        <li><a href='#'>Cine</a></li>
                        <li><a href='#'>Salas de ensayo</a></li>
                        <li><a href='#'>Estudios de grabación</a></li>
                        <li><a href='#'>Estidos de danza</a></li>
                    </ul>
                </div>
                
                <div class='footCards_children'>
                    <h2>Usuarios</h2>
                    <ul>
                        <li class="loginDiv"><a href='#'>Inisiar Sesión</a></li>
                        <li class="registerId"><a href='#'>Registrarte</a></li>
                        <li class="updateUserDiv"><a href='#'>Modificar tus datos</a></li>
                        <li><a href='#'>Crear un evento</a></li>
                        <li><a href='#'>Tu Página</a></li>
                        <li><a href='#'>Información</a></li>
                    </ul>
                </div>
                
                <div class='footCards_children'>
                    <h2>Mercado</h2>
                    <ul>
                        <li><a href='#'>Ver el mercado</a></li>
                        <li><a href='#'>Publicar</a></li>
                        <li><a href='#'>Tus ventas</a></li>
                        <li><a href='#'>Tus compras</a></li>
                        <li><a href='#'>Mensajes</a></li>
                        <li><a href='#'>Información</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class='footerBotom'>
            <div class='separador'></div>
            <p>Pasarela es una plataforma que sirve para intermediar entre productores y clientes. La calidad de los servicios prestados no son de nuestra responsabilidad.</p>
            <p>Desarrollador web Fabian Parentelli fabianparentelli007code@gmail.com</p>
        </div>
    `;
    footerDiv.appendChild(foot);
};
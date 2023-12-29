import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <div className="foot">
            <div className='footerUp'>
                <div className='fottWe'>
                    <img id='logoImg' src='./src/assets/logoArgentina.png' alt='Pasarela' />
                    <p>En Pasarella trabajamos arduamente en la construcción de un sitio seguro para la interacción entre productores y clientes. Brindamos servicios de venta de entradas, alquiler de salas de ensayo, estudios de grabación, teatro y otros relacionados al arte. Además contamo con un mercado de productos realcionados al arte.</p>

                    <div className='footnetWorks'>
                        <div className='footInstagrame'></div>
                        <div className='footFacebook'></div>
                        <div className='footYouTube'></div>
                        <div className='footTikTok'></div>
                    </div>

                    <div className='footWhatsapp'>
                        <img src='./src/assets/whatsapp.png' alt='whatsapp' />
                        <p>WhatsApp</p>
                    </div>
                </div>

                <div className='separador'></div>

                <div className='footCards'>
                    <div className='footCards_children'>
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

                    <div className='footCards_children'>
                        <h2>Usuarios</h2>
                        <ul>
                            <li className="loginDiv"><Link to={'/login'}>Inisiar Sesión</Link></li>
                            <li className="registerId"><Link to={'/register'} href='#'>Registrarte</Link></li>
                            <li className="updateUserDiv"><a href='#'>Modificar tus datos</a></li>
                            <li><a href='#'>Crear un evento</a></li>
                            <li><a href='#'>Tu Página</a></li>
                            <li><a href='#'>Información</a></li>
                        </ul>
                    </div>

                    <div className='footCards_children'>
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

            <div className='footerBotom'>
                <div className='separador'></div>
                <p>Pasarela es una plataforma que sirve para intermediar entre productores y clientes. La calidad de los servicios prestados no son de nuestra responsabilidad.</p>
                <p>Desarrollador web Fabian Parentelli fabianparentelli007code@gmail.com</p>
            </div>
        </div>
    )
};

export default Footer;
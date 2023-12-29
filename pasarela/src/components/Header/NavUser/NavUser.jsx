import { useLoginContext } from '../../../context/LoginContext';
import './navUser.css';

const NavUser = () => {

    const { user, setUser } = useLoginContext();

    const handleExit = () => {
        localStorage.removeItem('token');
        setUser({ isLogged: false, data: null });
    };

    return (
        <div className="navUser">
            {user.data && <p className="panelDivName">Hola {user.data.name}!!!</p>}
            <ul className="menu_linksA">
                <li className='menu_itemA menu_item--showA'>
                    <a href='#' className='menu_linkA'>Proyecto <img src="./src/assets/arrow.png" className="menu_arrowA" /></a>
                    <ul className='menu_nestingA nestingA'>
                        <li id="newProject" className='menu_insideA'><a className='menu_link menu_link--inside' href='#'>Crear</a></li>
                        <li className='menu_insideA'><a className='menu_link menu_link--inside' href='#'>Ver</a></li>
                    </ul>
                </li>
                <li className='menu_itemA menu_item--showA'>
                    <a href='#' className='menu_linkA'>Plataforam <img src="./src/assets/arrow.png" className="menu_arrowA" /></a>
                    <ul className='menu_nestingA'>
                        <li className='menu_insideA'><a className='menu_link menu_link--inside' href='#'>Datos financieros</a></li>
                        <li className='menu_insideA'><a className='menu_link menu_link--inside' href='#'>Estado de cuenta</a></li>
                    </ul>
                </li>
                <li className='menu_itemA menu_item--showA'>
                    <a href='#' className='menu_linkA'>Crear evento <img src="./src/assets/arrow.png" className="menu_arrowA" /></a>
                    <ul className='menu_nestingA'>
                        <li className='menu_insideA'><a className='menu_link menu_link--inside' href='#'>Crear Evento</a></li>
                        <li className='menu_insideA'><a className='menu_link menu_link--inside' href='#'>Ver eventos</a></li>
                    </ul>
                </li>
            </ul>
            <img className="exit" src="./src/assets/exit.png" alt="emergency-exit" onClick={handleExit} />
        </div>
    );
};

export default NavUser;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Browser = ({ handleMenuClick, menuVisible, listElementsRef, setMenuVisible }) => {

    const handleInsideClick = () => {
        setMenuVisible(false);
    };

    const handleItemClick = (e) => {
        const listItem = e.currentTarget;
        const nestedMenu = listItem.querySelector('.menu_nesting');
        const inside = listItem.querySelector('.menu_inside');
      
        if (listItem && nestedMenu) {
          listItem.classList.toggle('menu_item--active');
          if (listItem.classList.contains('menu_item--active')) {
            nestedMenu.style.height = `${nestedMenu.scrollHeight}px`;
          } else {
            nestedMenu.style.height = '0';
          }
        }
      
        // Verificar si 'inside' existe y si se hizo clic en un elemento con la clase 'menu_inside'
        if (inside && e.target.classList.contains('menu_inside')) {
          handleInsideClick();
        }
      };

    return (
        <div className="browser">
            <Link to={'/'}><img src='./src/assets/logoArgentina.png' alt='Pasarela' /></Link>
            <ul className={`menu_links ${menuVisible ? 'menu_links--show' : ''}`} ref={listElementsRef}>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>
                    <a href='#' className='menu_link'>Información <img src="./src/assets/arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Usuario</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Mercado</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Nosotros</a></li>
                    </ul>
                </li>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>

                    <a href='#' className='menu_link'>Mercado <img src="./src/assets/arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Ver Mercado</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Publicar</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Información</a></li>
                    </ul>
                </li>

                <li className={`menu_item menu_item--show`} onClick={handleItemClick}>

                    <a href='#' className='menu_link'>Usuario <img src="./src/assets/arrow.png" className="menu_arrow" /></a>
                    <ul className={`menu_nesting`}>
                        <li className='menu_inside loginDiv' onClick={handleInsideClick}><Link to={'/login'} className='menu_link menu_link--inside' >Iniciar Sesión</Link></li>
                        <li className='menu_inside registerId' onClick={handleInsideClick}><Link to={'/register'} className='menu_link menu_link--inside' href='#'>Registrarte</Link></li>
                        <li className='menu_inside updateUserDiv' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Modificar tus datos</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Tu Página</a></li>
                        <li className='menu_inside' onClick={handleInsideClick}><a className='menu_link menu_link--inside' href='#'>Crear Evento</a></li>
                    </ul>
                </li>
            </ul>
            <div className="menu_hamburguer" onClick={handleMenuClick}>
                <img className="menu_img" src='./src/assets/menu.png' alt="menu--v3" />
            </div>
        </div>
    );
};

export default Browser;
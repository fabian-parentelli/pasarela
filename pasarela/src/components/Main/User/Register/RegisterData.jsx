import Modal from '../../../utils/Modal/Modal';
import { Link } from 'react-router-dom';
import './register.css';

const RegisterData = ({ values = {}, handleSubmit, handleInputChange, isModalOpen, message, closeModal }) => {

    return (
        <div className="register">
            <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701524335/assets/rie8tui07mdhcihiopzl.png" />
            <div className="reg-right">
                <h2>Registrate en <span>Pasarela</span></h2>
                <form id="newFormRegister" className="formRegister" onSubmit={handleSubmit}>
                    <div className="subDiv">
                        <div>
                            <label>Nombre</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Este campo debe ser completado"
                                value={values.name || ''}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label>Apellido</label>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Este campo debe ser completado"
                                onChange={handleInputChange}
                                value={values.lastName || ''}
                                required />
                        </div>
                    </div>
                    <div className="subDiv">
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Este campo debe ser completado"
                                value={values.email || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Teléfono</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Este campo debe ser completado"
                                value={values.phone || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="subDiv">
                        <div>
                            <label>Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Este campo debe ser completado"
                                value={values.password || ''}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Confirmar Contraseña</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Este campo debe ser completado"
                                value={values.confirmPassword || ''}
                                onChange={handleInputChange}
                                required />
                        </div>
                    </div>
                    <div className='butDiv'>
                        <input className="btn-green" type="submit" value="registrarte" />
                        <Link to={'/login'}><button id="login" className="btn-blue">Iniciar sesión</button></Link>
                    </div>
                </form>
            </div>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    );
};

export default RegisterData;
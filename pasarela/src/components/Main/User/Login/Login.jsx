import './login.css';
import Button from '../../../utils/Button/Button'
import { useEffect, useState } from 'react';
import { useLoginContext } from '../../../../context/LoginContext';
import Modal from '../../../utils/Modal/Modal';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { user, login } = useLoginContext();
    const [values, setValues] = useState({ email: '', password: '' });
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.data && user.data.name) {
            setIsModalOpen(true);
            setMessage('Ya te encuentras logueado');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        };
    }, []);

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        login(values);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    useEffect(() => {
        if (user.logged) {
            setIsModalOpen(true);
            setMessage('Login exitoso');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        };
        if (user.error) {
            setMessage(user.error);
            setIsModalOpen(true);
        };
    }, [user]);

    return (
        <div className="login">
            <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701540528/assets/iehjdrxcbadnaq6ltxaw.png" />
            <form id="formLogin" onSubmit={handleSubmit}>
                <h2>Inicia sesión en <span>Pasarela</span></h2>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Este campo debe ser completado"
                        value={values.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Este campo debe ser completado"
                        value={values.password}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className='butDivLogin'>
                    <Button clas='btn-green' text='Iniciar sesión' />
                    <Link to={'/register'}><Button clas='btn-blue' text='Regístrate' /></Link>
                </div>
                <Link to={'/what_email'} className='lin'><p id="whatsEmail">Recuperar tu contraseña</p></Link>
            </form>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    );
};

export default Login;
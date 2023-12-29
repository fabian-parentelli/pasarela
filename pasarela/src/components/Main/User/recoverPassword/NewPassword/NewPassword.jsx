import './newPassword.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { newPasswordApi } from '../../../../../helpers/user/newPassword.js';
import Modal from '../../../../utils/Modal/Modal.jsx';

const NewPassword = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [values, setValues] = useState({ password: '', passConfirm: '' });

    const navigate = useNavigate();

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values.password === values.passConfirm) {
            const response = await newPasswordApi(token, values);
            if(response.error) {
                setIsModalOpen(true);
                setMessage(response.error);
            };
            if (response.data.status === 'success') {
                setIsModalOpen(true);
                setMessage('Contraseña nueva creada con éxito');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            };  
        } else {
            setIsModalOpen(true);
            setMessage('Las Contraseñas no son iguales');
        };
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    return (
        <div className='newPassword'>
            <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701886855/assets/iqh35dcjmeihh5d5qagi.png" />
            <form id="formRecPass" onSubmit={handleSubmit}>
                <h2>Recupera tu contraseña</h2>
                <div>
                    <label>Nueva Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Este campo debe de ser completado"
                        value={values.password || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label>Repite la contraseña</label>
                    <input
                        type="password"
                        name="passConfirm"
                        placeholder="Este campo debe de ser completado"
                        value={values.passConfirm || ''}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <input className="btn-blue btn" type="submit" value="Recuperar contraseña" />
            </form>
            {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} message={message} />}
        </div>
    )
};

export default NewPassword;
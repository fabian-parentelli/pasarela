import { useLoginContext } from '../../../../context/LoginContext';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RegisterData from './RegisterData';

const Register = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState(null);

    const navigate = useNavigate();
    const { user, register } = useLoginContext();

    const [values, setValues] = useState({
        name: '', lastName: '', email: '', password: '', phone: '', confirmPassword: ''
    });

    useEffect(() => {
        if (user.data && user.data.name) {
            setIsModalOpen(true);
            setMessage('Ya te encuentras Registrado');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        };
    }, []);

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        register(values);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(null);
    };

    useEffect(() => {
        if (user.registered) {
            setIsModalOpen(true);
            setMessage('Registro exitoso');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        };
        if (user.error) {
            setMessage(user.error);
            setIsModalOpen(true);
        };
    }, [user]);

    return (
        <RegisterData
        values={values}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        isModalOpen={isModalOpen}
        message={message}
        closeModal={closeModal}
        />
    );
};

export default Register;
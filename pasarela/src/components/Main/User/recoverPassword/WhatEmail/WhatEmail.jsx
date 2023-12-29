import { useState } from 'react';
import './whatEmail.css';
import { whatEmilApi } from '../../../../../helpers/user/whatEmail.js';

const WhatEmail = () => {

    const [values, setValues] = useState({ email: '' });
    const [vewMessage, setVewMessage] = useState(false);

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        whatEmilApi(values);
        setVewMessage(true);
    };

    return (
        <div className='whatEmail'>
            <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701888664/assets/ykl9vsrtlzidyttcouma.png" />
            <form id="formWhatEmail" onSubmit={handleSubmit}>
                <h2>Recupermos tus datos</h2>
                <div>
                    <label>Cual es tu email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Este campo debe de ser completado"
                        value={values.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <input className="btn-blue btn" type="submit" value="Recuperar contraseña" />
                {vewMessage && <p className='message'>Revisa tu correo electrónico</p>}
            </form>
        </div>
    );
};

export default WhatEmail;
import { Routes, Route } from 'react-router-dom';
import Main from '../components/Main/Main';
import Login from '../components/Main/User/Login/Login';
import Register from '../components/Main/User/Register/Register';
import WhatEmail from '../components/Main/User/RecoverPassword/WhatEmail/WhatEmail';
import NewPassword from '../components/Main/User/recoverPassword/NewPassword/NewPassword';

const PublicRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/what_email' element={<WhatEmail />}/>
            <Route path='/password' element={<NewPassword />}/>
        </Routes>
    );
};

export default PublicRoutes;
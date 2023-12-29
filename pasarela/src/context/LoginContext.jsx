import { createContext, useContext, useState } from "react";
import { loginApi } from '../helpers/user/login.js';
import { currentApi } from "../helpers/user/current.js";
import { registerApi } from '../helpers/user/register.js';

const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

const LoginProvider = ({ children }) => {

    const [user, setUser] = useState({
        isLogged: false,
        data: null,
        error: null,
        logged: false,
        registered: false
    });

    const isLogin = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const dataUser = await currentApi();
            setUser({ isLogged: true, data: dataUser });   // aca tengo que poner el error si da forbiden el token.
        } else {
            console.log('isLogin error:', user);
        };
    };

    const login = async (user) => {
        const loginData = await loginApi(user);
        if (loginData.status === 'success') {
            localStorage.setItem('token', loginData.accesToken);
            setUser({ logged: true });
        } else {
            setUser({ error: loginData.error })
        };
    };

    const register = async (user) => {
        const registerData = await registerApi(user);
        if (registerData.error) return setUser({ error: registerData.error })
        if (registerData.data.status === 'success') return setUser({ registered: true });
    };

    return (
        <LoginContext.Provider value={{ user, setUser, isLogin, login, register }}>
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;
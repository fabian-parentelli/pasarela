import { useEffect } from 'react';
import './main.css';
import { useLoginContext } from '../../context/LoginContext';

const Main = () => {

    const { isLogin, user } = useLoginContext();

    useEffect(() => { 
        const fetchData = async () => { 
            await isLogin()
        };
        fetchData();
    }, []);

    // console.log(user); // Siempre que ponga acá el console.log va afuncionar.

    return (
        <div className="main">
            <h2>Este es el main</h2>
            <p>{user.data && user.data.name}</p>
        </div>
    );
};

export default Main;
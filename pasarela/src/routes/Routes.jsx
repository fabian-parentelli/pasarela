import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import PublicRoutes from './PublucRoutes';
import { useLoginContext } from '../context/LoginContext';
import PrivateRoutes from './PrivateRoutes';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Nav />
            <Header />
                <PrivateRoutes /> 
                <PublicRoutes />
            <Footer />
        </BrowserRouter>
    );
};

export default AppRoutes;
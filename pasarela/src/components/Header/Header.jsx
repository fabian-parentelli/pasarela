import './header.css';
import { useLoginContext } from '../../context/LoginContext';
import Carousel from './Carousel/carousel';
import NavUser from './NavUser/NavUser';

const Header = () => {

    const { user } = useLoginContext();
    
    return (
        <div className="header">
            <Carousel />
            {user.data && <NavUser />}
        </div>
    );
};

export default Header;
import './button.css';

const Button = ({clas, text}) => {

    return (
        <button className={clas}>{text}</button>
    );
};

export default Button;
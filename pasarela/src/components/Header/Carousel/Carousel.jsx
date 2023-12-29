import './carousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                <div>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701520410/carrusel/wt8mrmpdvkymxiujqdsm.png" alt="Imagen 1" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701520074/carrusel/wqldcq0ij21kwh1ck5lq.png" alt="Imagen 2" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701516352/carrusel/zkw43upfxyejteztvwok.png" alt="Imagen 3" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701516352/carrusel/ka5g5atrqctlynzueknh.png" alt="Imagen 4" />
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1701516352/carrusel/yobwoqmljfvgdleegp3j.png" alt="Imagen 5" />
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
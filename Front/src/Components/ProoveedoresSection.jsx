import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/LogoCarousel.css";

import logo1 from "../assets/logos/Logo-1.png";
import logo2 from "../assets/logos/Logo-2.png";
import logo3 from "../assets/logos/Logo-3.png";
import logo4 from "../assets/logos/Logo-4.png";
import logo5 from "../assets/logos/Logo-5.png";
import logo6 from "../assets/logos/Logo-6.png";
import logo7 from "../assets/logos/Logo-7.png";
import logo8 from "../assets/logos/Logo-8.png";

const LogoCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

    return (
        <div className="logo-carousel">
            <div className="logo-carousel-header">
                <h2>Explora Nuestros Proveedores</h2>
                <p>
                    Conoce a los expertos que darán vida a tu evento. Navega
                    entre los logos de nuestros proveedores seleccionados y
                    encuentra todo lo necesario para una celebración
                    excepcional.
                </p>
            </div>
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="logo-carousel-slide">
                        <img
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="logo-carousel-image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LogoCarousel;

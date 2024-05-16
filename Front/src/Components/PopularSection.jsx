import Card from "./Cards";
import { FaArrowRight } from "react-icons/fa";
import "../styles/PopularSection.css";
import finca from "../assets/Cards-img/Finca.jpg";
import magia from "../assets/Cards-img/Magia.jpg";
import catering from "../assets/Cards-img/Catering.jpg";

const PopularSection = () => (
    <section className="popular-section">
        <div className="header">
            <div className="header-most-pupular-info">
                <h2>Lo Más Popular</h2>
                <p>
                    Descubre las tendencias más solicitadas en eventos que están
                    cautivando a nuestros clientes.
                </p>
            </div>
            <button className="view-more-button">
                Ver más <FaArrowRight />
            </button>
        </div>
        <div className="cards-container">
            <Card
                imgSrc={finca}
                title="Fincas Rústicas"
                description="Disfruta de un ambiente idílico y natural en nuestra finca."
                rating={5}
            />
            <Card
                imgSrc={magia}
                title="Show de Magia y Entretenimiento"
                description="Magos profesionales y animadores que garantizan diversión."
                rating={5}
            />
            <Card
                imgSrc={catering}
                title="Catering Corporativo Sustentable"
                description="Menús elaborados con ingredientes locales y sostenibles."
                rating={5}
            />
        </div>
        <div className="view-more"></div>
    </section>
);

export default PopularSection;

import "../styles/PopularSection.css";

const Card = ({ imgSrc, title, description, rating }) => (
    <div className="card">
        <img src={imgSrc} alt={title} />
        <div className="card-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="rating">{rating}</div>
        </div>
    </div>
);

const PopularSection = () => (
    <section className="popular-section">
        <div className="header">
            <h2>Lo Más Popular</h2>
            <p>
                Descubre las tendencias más solicitadas en eventos que están
                cautivando a nuestros clientes.
            </p>
        </div>
        <div className="cards-container">
            <Card
                imgSrc="/images/fincas.jpg"
                title="Fincas Rústicas"
                description="Disfruta de un ambiente idílico y natural en nuestra finca."
                rating="★★★★★"
            />
            <Card
                imgSrc="/images/magia.jpg"
                title="Show de Magia y Entretenimiento"
                description="Magos profesionales y animadores que garantizan diversión."
                rating="★★★★★"
            />
            <Card
                imgSrc="/images/catering.jpg"
                title="Catering Corporativo Sustentable"
                description="Menús elaborados con ingredientes locales y sostenibles."
                rating="★★★★★"
            />
        </div>
        <div className="view-more">
            <button className="view-more-button">Ver más ➔</button>
        </div>
    </section>
);

export default PopularSection;

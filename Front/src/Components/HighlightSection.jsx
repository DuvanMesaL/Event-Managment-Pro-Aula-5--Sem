import { useState } from "react";
import "../styles/highlightSection.css";
import imgVenue from "../assets/Venue-img/venue-1.jpg";
import imgVenue2 from "../assets/Venue-img/venue-2.jpg";
import Select from "./select"; // Importa tu componente Select

export default function Component() {
    const [selectedOption, setSelectedOption] = useState("companies");

    return (
        <section className="highlight-section">
            <div className="container">
                <div className="grid-container">
                    <div className="text-content">
                        <div className="heading-container">
                            <h1 className="heading">
                                Descubre el Escenario de Tus Sueños
                            </h1>
                            <p className="subheading">
                                Encuentra el lugar perfecto o la empresa ideal
                                para dar vida a tu evento.
                            </p>
                        </div>
                        <div className="search-container">
                            <div className="input-container">
                                <input
                                    className="input"
                                    placeholder="Busca Empresas o lugares"
                                />
                                <button className="search-icon-button">
                                    <SearchIcon className="search-icon" />
                                </button>
                            </div>
                            <div className="select-container">
                                <Select
                                    options={[
                                        {
                                            label: "Companies",
                                            value: "companies",
                                        },
                                        { label: "Venues", value: "venues" },
                                    ]}
                                    placeholder="Select an option"
                                    defaultValue="companies"
                                    value={selectedOption}
                                    onChange={setSelectedOption}
                                />
                            </div>
                            <button className="search-button">Search</button>
                        </div>
                        <div className="button-mobile-search-container">
                            <button className="mobile-search-button">
                                <SearchIcon className="search-icon" /> Busca
                                Proveedores
                            </button>
                        </div>
                    </div>
                    <div className="featured-venues">
                        <div className="featured-heading-container">
                            <h2 className="featured-heading">
                                Lugares Destacados
                            </h2>
                            <p className="featured-subheading">
                                Explore nuestros lugares mejor calificados para
                                su próximo evento.
                            </p>
                        </div>
                        <div className="venue-cards">
                            <a className="venue-link" href="#">
                                <div className="venue-card">
                                    <img
                                        alt="Venue"
                                        className="venue-image"
                                        height={200}
                                        src={imgVenue}
                                        width={300}
                                    />
                                    <div className="venue-gradient" />
                                    <div className="venue-details">
                                        <div className="venue-title">
                                            The Grand Ballroom
                                        </div>
                                        <div className="venue-capacity">
                                            Capacity: 500
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a className="venue-link" href="#">
                                <div className="venue-card">
                                    <img
                                        alt="Venue"
                                        className="venue-image"
                                        height={200}
                                        src={imgVenue2}
                                        width={300}
                                    />
                                    <div className="venue-gradient" />
                                    <div className="venue-details">
                                        <div className="venue-title">
                                            The Rooftop Garden
                                        </div>
                                        <div className="venue-capacity">
                                            Capacity: 200
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

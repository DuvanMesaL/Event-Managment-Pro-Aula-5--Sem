import React from "react";
import logo from "../assets/logo-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTwitter,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-Button-info">
                    <div className="footer-left">
                        <h2>Regístrate</h2>
                        <p>Stay Up To Date With Our New Articles</p>
                    </div>
                    <div className="footer-right">
                        <button>Regístrate</button>
                    </div>
                </div>
                <div className="footer-top-logo">
                    <img src={logo} alt="Logo OccasionNexus" />
                    <h1>OccasionNexus</h1>
                </div>
            </div>
            <div className="footer-main">
                <div className="footer-main-company-section">
                    <h3 className="title">Company</h3>
                    <ul className="item-main-section">
                        <li>
                            <a href="#help-center">Centro de Ayuda</a>
                        </li>
                        <li>
                            <a href="#about-us">Sobre Nosotros</a>
                        </li>
                        <li>
                            <a href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-main-legal-section">
                    <h3 className="title">Legal</h3>
                    <ul className="item-main-section">
                        <li>
                            <a href="#terms">Términos y condiciones</a>
                        </li>
                        <li>
                            <a href="#privacy">Políticas de Privacidad</a>
                        </li>
                        <li>
                            <a href="#cookies">Cookies</a>
                        </li>
                        <li>
                            <a href="#licenses">Licencias</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-main-social-section">
                    <h3 className="title">Social</h3>
                    <div className="item-main-section social-icons">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fa-icon"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fa-icon"
                        >
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a
                            href="https://www.github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fa-icon"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fa-icon"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="separator">
                    <p>
                        © Mi Compañía Ltd. 2024, Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

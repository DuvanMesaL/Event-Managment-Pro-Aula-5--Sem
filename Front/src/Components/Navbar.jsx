import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import LogoIcon from "./../assets/logo-icon.png";
import dropdownToggleButton from "../assets/Icons/angulo-derecho.svg";
import userIcon from "../assets/Icons/circulo-de-usuario.svg"; // Icono de usuario
import "./../styles/navbar.css";
import "../styles/overlay.css"; // Importar el archivo overlay.css
import DropdownMenu from "./DropMenu";
import iconPaths from "./iconsPaths";

const Navbar = ({ isOpen, onToggleSidebar, onCloseSidebar }) => {
    const [activeMenu, setActiveMenu] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    const hoverTimeout = useRef(null);

    useEffect(() => {
        function handleResize() {
            const newIsMobile = window.innerWidth < 1200;
            if (!newIsMobile && isMobile) {
                setIsMobile(newIsMobile);
                onCloseSidebar();
            } else {
                setIsMobile(newIsMobile);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile, onCloseSidebar]);

    useEffect(() => {
        if (!isOpen) {
            setActiveMenu("");
        }
    }, [isOpen]);

    const handleDropdownClick = (menuName) => {
        if (isMobile) {
            setActiveMenu(activeMenu === menuName ? "" : menuName);
        }
    };

    const handleMouseEnter = (menuName) => {
        if (!isMobile) {
            clearTimeout(hoverTimeout.current);
            setActiveMenu(menuName);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            hoverTimeout.current = setTimeout(() => {
                setActiveMenu("");
            }, 300);
        }
    };

    const handleBack = () => {
        setActiveMenu("");
    };

    const menuItems = {
        eventos: {
            title: "Mi Organizadora de Eventos",
            titleLink: "/mi-organizadora-eventos",
            items: [
                {
                    label: "Bodas",
                    link: "/bodas",
                    icon: iconPaths.bodas,
                },
                {
                    label: "Cumpleaños",
                    link: "/cumpleanos",
                    icon: iconPaths.cumpleanos,
                },
                {
                    label: "Eventos Corrporativos",
                    link: "/otros",
                    icon: iconPaths.eventosCorporativos,
                },
                {
                    label: "Eventos Culturales",
                    link: "/otros",
                    icon: iconPaths.eventosCulturales,
                },
                {
                    label: "Otros Eventos",
                    link: "/otros",
                    icon: iconPaths.otrosEventos,
                },
            ],
        },
        proveedores: {
            title: "Empieza a contratar tus proveedores",
            titleLink: "/proveedores",
            items: [
                {
                    label: "Fotógrafos",
                    link: "/fotografos",
                    icon: iconPaths.fotografos,
                },
                {
                    label: "Catering",
                    link: "/catering",
                    icon: iconPaths.catering,
                },
                { label: "Música", link: "/musica", icon: iconPaths.musica },
                {
                    label: "Vestimenta",
                    link: "/vestimenta",
                    icon: iconPaths.vestimenta,
                },
                {
                    label: "Decoracion",
                    link: "/decoracion",
                    icon: iconPaths.decoracion,
                },
                {
                    label: "Coordinadores de Eventos",
                    link: "/coordinadores",
                    icon: iconPaths.coordinadores,
                },
                {
                    label: "Transporte",
                    link: "/transporte",
                    icon: iconPaths.transporte,
                },
                {
                    label: "Belleza y Estilo",
                    link: "belleza",
                    icon: iconPaths.belleza,
                },
            ],
        },
        planificaciones: {
            title: "Planifica tu evento",
            titleLink: "/planificaciones",
            items: [
                { label: "Lugares", link: "/lugares", icon: iconPaths.lugares },
                {
                    label: "Invitaciones",
                    link: "/invitaciones",
                    icon: iconPaths.invitaciones,
                },
                {
                    label: "Programacion",
                    link: "/programacion",
                    icon: iconPaths.programacion,
                },
                {
                    label: "Presupuesto",
                    link: "/presupuesto",
                    icon: iconPaths.presupuesto,
                },
                {
                    label: "Lista de Invitados",
                    link: "/invitados",
                    icon: iconPaths.invitados,
                },
                {
                    label: "Timeline de Eventos",
                    link: "/timeline",
                    icon: iconPaths.timeline,
                },
            ],
        },
        contacto: {
            title: "Contacto",
            titleLink: "/contacto",
            items: [
                {
                    label: "Formulario de Contacto",
                    link: "/contact-form",
                    icon: iconPaths.contacto,
                },
            ],
        },
    };

    const infoBoxes = {
        proveedores: [
            {
                title: "Destination Weddings",
                content: "Cásate en el país que siempre has soñado.",
                icon: iconPaths.fotografos,
            },
            {
                title: "Gana 5.000€",
                content:
                    "Participa en la 139ª edición del sorteo de Bodas.net.",
                icon: iconPaths.catering,
            },
        ],
        planificaciones: [
            {
                title: "Planifica tu evento",
                content:
                    "Encuentra todos los recursos que necesitas para planificar tu evento.",
                icon: iconPaths.lugares,
            },
        ],
    };

    const extraSections = {
        proveedores: {
            title: "Otras Categorías",
            items: [
                { label: "Mobiliario", link: "/mobiliario" },
                { label: "Carpas", link: "/carpas" },
                { label: "Animación", link: "/animacion" },
                { label: "Decoración para bodas", link: "/decoracion-bodas" },
                { label: "Listas de boda", link: "/listas-boda" },
                { label: "Organización Bodas", link: "/organizacion-bodas" },
                { label: "Tartas de boda", link: "/tartas-boda" },
                {
                    label: "Food truck y mesas dulces",
                    link: "/food-truck-mesas-dulces",
                },
                { label: "Promociones", link: "/promociones" },
            ],
        },
        planificaciones: {
            title: "Lo Más Recomendado",
            items: [
                { label: "Hoteles", link: "/hoteles" },
                { label: "Salones de eventos", link: "/salones" },
                { label: "Catering", link: "/catering" },
                { label: "Decoración", link: "/decoracion" },
            ],
        },
    };

    return (
        <div className={`app-container ${isOpen ? "sidebar-open" : ""}`}>
            <nav className="navbar">
                <div className="container-navbar">
                    <button className="menu-button" onClick={onToggleSidebar}>
                        ☰
                    </button>
                    <div className="logo">
                        <img src={LogoIcon} alt="Logo" />
                        <a href="#home">
                            <h1 className="logo-title">OccasioNexus</h1>
                        </a>
                    </div>
                    <div className={`navigation ${isOpen ? "open" : ""}`}>
                        <div className="close-navigation">
                            <button
                                className="close-button"
                                onClick={onToggleSidebar}
                            >
                                ×
                            </button>
                        </div>
                        <ul>
                            {Object.keys(menuItems).map((key) => (
                                <li
                                    key={key}
                                    onMouseEnter={() => handleMouseEnter(key)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <a
                                        className="menu-item-link"
                                        href={`/${key}`}
                                    >
                                        {key.charAt(0).toUpperCase() +
                                            key.slice(1)}
                                    </a>
                                    {isMobile && (
                                        <button
                                            className="dropdown-toggle-button"
                                            onClick={() =>
                                                handleDropdownClick(key)
                                            }
                                        >
                                            <img
                                                src={dropdownToggleButton}
                                                alt="Toggle Dropdown"
                                            />
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="access">
                        <a href="/Login">ACCEDE</a>
                        <a href="/Registro">REGISTRATE</a>
                    </div>
                    <div className="mobile-access">
                        <a href="/Login">
                            <img src={userIcon} alt="User" />
                        </a>
                    </div>
                </div>
            </nav>
            <div
                className={`overlay ${activeMenu ? "visible" : ""}`}
                onClick={onCloseSidebar}
            ></div>
            {Object.keys(menuItems).map((key) => (
                <DropdownMenu
                    key={key}
                    isOpen={activeMenu === key}
                    onMouseEnter={() => clearTimeout(hoverTimeout.current)}
                    onMouseLeave={handleMouseLeave}
                    items={menuItems[key].items}
                    menuName={key.charAt(0).toUpperCase() + key.slice(1)}
                    title={menuItems[key].title}
                    titleLink={menuItems[key].titleLink}
                    infoBoxes={infoBoxes[key]}
                    extraSection={extraSections[key]}
                    onBack={handleBack}
                    onClose={onCloseSidebar}
                />
            ))}
        </div>
    );
};

Navbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onToggleSidebar: PropTypes.func.isRequired,
    onCloseSidebar: PropTypes.func.isRequired,
};

export default Navbar;

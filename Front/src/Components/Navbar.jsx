import React, { useState, useEffect, useRef } from "react";
import LogoIcon from "./../assets/logo-icon.png";
import "./../styles/navbar.css";
import DropdownMenu from "./DropMenu";

const Navbar = ({ isOpen, onToggleSidebar, onCloseSidebar }) => {
    const [activeMenu, setActiveMenu] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    const hoverTimeout = useRef(null);

    useEffect(() => {
        function handleResize() {
            const newIsMobile = window.innerWidth < 1200;
            if (!newIsMobile && isMobile) {
                setIsMobile(newIsMobile);
                // Close the sidebar and clear active menu when resizing to desktop
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
                { label: "Bodas", link: "/bodas", icon: "/path/to/icon1.png" },
                {
                    label: "Cumpleaños",
                    link: "/cumpleanos",
                    icon: "/path/to/icon2.png",
                },
                {
                    label: "Otros Eventos",
                    link: "/otros",
                    icon: "/path/to/icon3.png",
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
                    icon: "/path/to/icon4.png",
                },
                {
                    label: "Catering",
                    link: "/catering",
                    icon: "/path/to/icon5.png",
                },
                {
                    label: "Música",
                    link: "/musica",
                    icon: "/path/to/icon6.png",
                },
                {
                    label: "Vestimenta",
                    link: "/vestimenta",
                    icon: "/path/to/icon7.png",
                },
                {
                    label: "Decoracion",
                    link: "/decoracion",
                    icon: "/path/to/icon8.png",
                },
                {
                    label: "Coordinadores de Eventos",
                    link: "/coordinadores",
                    icon: "/path/to/icon9.png",
                },
                {
                    label: "Transporte",
                    link: "/transporte",
                    icon: "/path/to/icon10.png",
                },
                {
                    label: "Belleza y Estilo",
                    link: "belleza",
                    icon: "/path/to/icon11.png",
                },
            ],
        },
        planificaciones: {
            title: "Planifica tu evento",
            titleLink: "/planificaciones",
            items: [
                {
                    label: "Lugares",
                    link: "/lugares",
                    icon: "/path/to/icon12.png",
                },
                {
                    label: "Invitaciones",
                    link: "/invitaciones",
                    icon: "/path/to/icon13.png",
                },
                {
                    label: "Programacion",
                    link: "/programacion",
                    icon: "/path/to/icon14.png",
                },
                {
                    label: "Presupuesto",
                    link: "/presupuesto",
                    icon: "/path/to/icon15.png",
                },
                {
                    label: "Lista de Invitados",
                    link: "/invitados",
                    icon: "/path/to/icon16.png",
                },
                {
                    label: "Timeline de Eventos",
                    link: "/timeline",
                    icon: "/path/to/icon17.png",
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
                    icon: "/path/to/icon18.png",
                },
            ],
        },
    };

    const infoBoxes = {
        proveedores: [
            {
                title: "Destination Weddings",
                content: "Cásate en el país que siempre has soñado.",
                icon: "/path/to/info-icon1.png",
            },
            {
                title: "Gana 5.000€",
                content:
                    "Participa en la 139ª edición del sorteo de Bodas.net.",
                icon: "/path/to/info-icon2.png",
            },
        ],
        planificaciones: [
            {
                title: "Planifica tu evento",
                content:
                    "Encuentra todos los recursos que necesitas para planificar tu evento.",
                icon: "/path/to/info-icon3.png",
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
        <div>
            <nav className="navbar">
                <button className="menu-button" onClick={onToggleSidebar}>
                    ☰
                </button>
                <div className="container-navbar">
                    <div className="logo">
                        <img src={LogoIcon} alt="Logo" />
                        <a href="#home">
                            <h1 className="Logo-title">OccasioNexus</h1>
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
                                            &gt;
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="access">
                        <a href="#accede">ACCEDE</a>
                        <a href="#registro">REGISTRATE</a>
                    </div>
                </div>
            </nav>
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

export default Navbar;

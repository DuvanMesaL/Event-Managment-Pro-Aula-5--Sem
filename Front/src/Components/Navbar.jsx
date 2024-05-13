import React, { useState, useEffect, useRef } from "react";
import LogoIcon from "./../assets/logo-icon.png";
import "./../styles/navbar.css";
import DropdownMenu from "./DropMenu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
    const hoverTimeout = useRef(null);

    useEffect(() => {
        function handleResize() {
            const newIsMobile = window.innerWidth < 1200;
            if (!newIsMobile && isMobile) {
                // If transitioning from mobile to desktop, close any active dropdown menus
                setActiveMenu("");
            }
            setIsMobile(newIsMobile);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setActiveMenu(""); // Clears any active menu when the sidebar is toggled
        }
    };

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

    const menuItems = {
        eventos: [
            { label: "Bodas", link: "/bodas" },
            { label: "Cumpleaños", link: "/cumpleanos" },
            { label: "Otros Eventos", link: "/otros" },
        ],
        proveedores: [
            { label: "Fotógrafos", link: "/fotografos" },
            { label: "Catering", link: "/catering" },
            { label: "Música", link: "/musica" },
        ],
    };

    return (
        <div>
            <nav className="navbar">
                <button className="menu-button" onClick={toggleSidebar}>
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
                                onClick={toggleSidebar}
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
                    items={menuItems[key]}
                    menuName={key.charAt(0).toUpperCase() + key.slice(1)}
                />
            ))}
        </div>
    );
};

export default Navbar;

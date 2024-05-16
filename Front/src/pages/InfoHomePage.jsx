// src/pages/InfoHomePage.jsx
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import HighlightSection from "../Components/HighlightSection";
import LogoCarousel from "../Components/ProoveedoresSection";
import PopularSection from "../Components/PopularSection";
import Footer from "../Components/Footer";
import About from "../Components/AboutSection";
import "../styles/overlay.css";
import "../styles/Accordion.css";

const InfoHomePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div className={`app-container ${isOpen ? "sidebar-open" : ""}`}>
            <div
                className={`overlay ${isOpen ? "visible" : ""}`}
                onClick={handleCloseSidebar}
            ></div>
            <Navbar
                isOpen={isOpen}
                onToggleSidebar={handleToggleSidebar}
                onCloseSidebar={handleCloseSidebar}
            />
            <HighlightSection />
            <LogoCarousel />
            <PopularSection />
            <About />
            <Footer />
        </div>
    );
};

export default InfoHomePage;

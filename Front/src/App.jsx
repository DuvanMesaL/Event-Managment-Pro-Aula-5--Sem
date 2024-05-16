import { useState } from "react";
import Navbar from "./Components/Navbar";
import HighlightSection from "./Components/HighlightSection";
import "./styles/overlay.css";
import LogoCarousel from "./Components/ProoveedoresSection";
import PopularSection from "./Components/PopularSection";

function App() {
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
        </div>
    );
}

export default App;

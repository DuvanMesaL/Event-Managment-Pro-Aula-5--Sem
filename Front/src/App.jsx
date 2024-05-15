import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./styles/overlay.css";

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
        </div>
    );
}

export default App;

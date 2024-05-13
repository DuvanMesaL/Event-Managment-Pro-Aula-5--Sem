import React from "react";
import "../styles/DropMenu.css";

const DropdownMenu = ({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    items,
    onClose,
    onBack,
    menuName, // Este prop es necesario para mostrar el nombre del menú actual
}) => {
    return (
        <div
            className={`dropdown-fullwidth ${isOpen ? "open" : ""}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="dropdown-header">
                <button className="back-button" onClick={onBack}>
                    {"<"}
                </button>
                <span className="menu-title">{menuName}</span>
                <button className="close-button" onClick={onClose}>
                    {"×"}
                </button>
            </div>
            {items.map((item) => (
                <div className="DropMenu-List" key={item.label}>
                    <a href={item.link}>{item.label}</a>
                </div>
            ))}
        </div>
    );
};

export default DropdownMenu;

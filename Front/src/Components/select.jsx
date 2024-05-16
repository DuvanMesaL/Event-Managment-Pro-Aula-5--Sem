import { useState } from "react";
import PropTypes from "prop-types";
import downArrow from "../assets/Icons/angulo-hacia-abajo.svg";
import "../styles/Select.css";

const Select = ({
    options = [],
    label = "",
    placeholder = "Select an option",
    defaultValue = "",
    value = "",
    onChange = () => {},
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectChange = (value) => {
        setIsOpen(false);
        if (onChange) onChange(value);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectedOptionLabel =
        options.find((option) => option.value === value)?.label || placeholder;

    return (
        <div className="select-container max-w-xs">
            {label && <label className="select-label">{label}</label>}
            <div className="select-wrapper" onClick={toggleDropdown}>
                <div className={`select-element ${isOpen ? "open" : ""}`}>
                    {selectedOptionLabel}
                </div>
                <img
                    src={downArrow}
                    alt="Down Arrow"
                    className={`select-arrow ${isOpen ? "open" : ""}`}
                />
            </div>
            {isOpen && (
                <ul className="select-dropdown">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className="select-item"
                            onClick={() => handleSelectChange(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

Select.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Select;

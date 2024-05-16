import PropTypes from "prop-types";
import "../styles/DropMenu.css";
import backbutton from "../assets/Icons/angulo-izquierdo.svg";
import closebutton from "../assets/Icons/x.svg";

const DropdownMenu = ({
    isOpen,
    onMouseEnter,
    onMouseLeave,
    items,
    onClose,
    onBack,
    menuName,
    infoBoxes,
    extraSection,
    title,
    titleLink,
}) => {
    const columns = 2;

    const getColumnItems = (items, columns) => {
        const itemsPerColumn = Math.ceil(items.length / columns);
        let result = [];
        for (let i = 0; i < columns; i++) {
            result.push(
                items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
            );
        }
        return result;
    };

    const groupedItems = getColumnItems(items, columns);

    return (
        <div
            className={`dropdown-fullwidth ${isOpen ? "open" : ""}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="dropdown-header">
                <button className="back-button" onClick={onBack}>
                    <img
                        className="img-back"
                        src={backbutton}
                        alt="Toggle back"
                    />
                </button>
                <span className="menu-title">{menuName}</span>
                <button className="close-button" onClick={onClose}>
                    <img
                        className="img-close-sidebar"
                        src={closebutton}
                        alt="Toggle close"
                    />
                </button>
            </div>
            <div className="dropdown-content">
                <div className="dropdown-main">
                    <div className="dropdown-grid">
                        <h3 className="dropdown-title">
                            <a href={titleLink}>{title}</a>
                        </h3>
                        {groupedItems.map((group, index) => (
                            <div key={index} className="dropmenu-column">
                                {group.map((item) => (
                                    <div
                                        className="dropmenu-item"
                                        key={item.label}
                                    >
                                        <a href={item.link}>
                                            {item.icon && (
                                                <img
                                                    src={item.icon}
                                                    alt={item.label}
                                                />
                                            )}
                                            {item.label}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="info-boxes">
                        {infoBoxes &&
                            infoBoxes.map((box, index) => (
                                <div key={index} className="info-box">
                                    {box.icon && (
                                        <img
                                            src={box.icon}
                                            alt={box.title}
                                            className="info-box-icon"
                                        />
                                    )}
                                    <div className="info-box-information">
                                        <h4>{box.title}</h4>
                                        <p>{box.content}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                {extraSection && extraSection.items.length > 0 && (
                    <div className="extra-section">
                        <h4>{extraSection.title}</h4>
                        <div className="categories-list">
                            {extraSection.items.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className="category-item"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

DropdownMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            icon: PropTypes.string,
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
    menuName: PropTypes.string.isRequired,
    infoBoxes: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            icon: PropTypes.string,
        })
    ),
    extraSection: PropTypes.shape({
        title: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string.isRequired,
                link: PropTypes.string.isRequired,
            })
        ).isRequired,
    }),
    title: PropTypes.string,
    titleLink: PropTypes.string,
};

export default DropdownMenu;

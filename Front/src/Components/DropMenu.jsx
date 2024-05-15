import "../styles/DropMenu.css";

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
                    {"<"}
                </button>
                <span className="menu-title">{menuName}</span>
                <button className="close-button" onClick={onClose}>
                    {"×"}
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

export default DropdownMenu;

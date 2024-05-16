import React from "react";
import starFull from "../assets/Icons/star-full.svg";
import starHalf from "../assets/Icons/star-half.svg";
import "../styles/Cards.css";

const Card = ({ imgSrc, title, description, rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
        <div className="card">
            <img src={imgSrc} alt={title} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="rating">
                    {[...Array(fullStars)].map((_, i) => (
                        <img
                            key={i}
                            src={starFull}
                            alt="Star"
                            className="star"
                        />
                    ))}
                    {halfStar && (
                        <img src={starHalf} alt="Half Star" className="star" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;

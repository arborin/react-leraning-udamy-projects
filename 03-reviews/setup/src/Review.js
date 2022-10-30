import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const next = () => {
        if (index < people.length - 1) {
            setIndex(index + 1);
        }
    };

    const randomReview = () => {
        const max = people.length - 1;
        const random_index = Math.floor(Math.random() * max);
        setIndex(random_index);
    };

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quout-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prev}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={next}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomReview}>
                Surprise me
            </button>
        </article>
    );
};

export default Review;

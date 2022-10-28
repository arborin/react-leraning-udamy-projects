import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
    return (
        <>
            <div className="title">
                <h2>Our torus</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) => {
                    console.log(tour);
                    return <Tour key={tour.id} {...tour}></Tour>;
                })}
            </div>
        </>
    );
};

export default Tours;

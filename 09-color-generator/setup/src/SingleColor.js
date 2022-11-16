import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(",");
    const hex = rgbToHex(...rgb);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 300);

        return () => clearTimeout(timeout);
    }, [alert]);

    console.log(bcg);
    const style = { backgroundColor: `rgb(${bcg})` };
    return (
        <article
            className={`color`}
            style={style}
            onClick={() => {
                setAlert(true);
                navigator.clipboard.writeText(hex);
            }}
        >
            <p className="percent-value">{weight} %</p>
            <p>{hex}</p>
            {alert && <p className="alert">Copy to clipboard</p>}
        </article>
    );
};

export default SingleColor;

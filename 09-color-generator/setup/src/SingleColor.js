import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(",");
    const hex = rgbToHex(...rgb);

    console.log(bcg);
    const style = { backgroundColor: `rgb(${bcg})` };
    return (
        <article className={`color`} style={style}>
            <p className="percent-value">{weight} %</p>
            <p>{hex}</p>
        </article>
    );
};

export default SingleColor;

import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
    const [color, setColor] = useState("");
    const [error, setError] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setError(false);
            let colors = new Values(color).all(10);
            setList(colors);
        } catch (error) {
            setError(true);
            console.log("Error...");
        }
    };

    return (
        <>
            <section className="container">
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={color}
                        placeholder="#f15025"
                        onChange={(e) => setColor(e.target.value)}
                        className={`${error ? "error" : null}`}
                    />
                    <button className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </section>

            <section className="colors">
                {list.map((color, index) => {
                    console.log(color);
                    return <SingleColor key={index} {...color} index={index} />;
                })}
            </section>
        </>
    );
}

export default App;

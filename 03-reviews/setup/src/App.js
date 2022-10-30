import React from "react";
import Review from "./Review";
import { FaCanadianMapleLeaf } from "react-icons/fa";

function App() {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>Our reviewers</h2>
                    <div className="underline"></div>
                </div>
                <Review />
            </section>
        </main>
    );
}

export default App;

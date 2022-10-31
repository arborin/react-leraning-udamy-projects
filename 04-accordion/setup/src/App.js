import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
    const [questions, setQeustions] = useState(data);

    return (
        <>
            <main>
                <div className="container">
                    <h3>questions and answers about login</h3>
                    <section>
                        {questions.map((question) => {
                            // return <h2>{question.title}</h2>;
                            return (
                                <SingleQuestion
                                    key={question.id}
                                    {...question}
                                />
                            );
                        })}
                    </section>
                </div>
            </main>
        </>
    );
}

export default App;

import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
    const [loding, setLoding] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fechJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoding(false);
    };

    useEffect(() => {
        fechJobs();
    }, []);

    if (loding) {
        return (
            <section className="section loading">
                <h1>loading...</h1>
            </section>
        );
    }

    const { company, dates, duties, title } = jobs[value];
    console.log(jobs);
    return (
        <section className="section">
            <div className="title">
                <h2>experiance</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {jobs.map((job, index) => {
                        return (
                            <button
                                className={`job-btn ${
                                    index === value && "active-btn"
                                }`}
                                key={index}
                                onClick={() => {
                                    setValue(index);
                                }}
                            >
                                {job.company}
                            </button>
                        );
                    })}
                </div>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p>{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                            <div key={index} className="job-desc">
                                <FaAngleDoubleRight className="job-icon" />
                                <p>{duty}</p>
                            </div>
                        );
                    })}
                </article>
            </div>
        </section>
    );
}

export default App;

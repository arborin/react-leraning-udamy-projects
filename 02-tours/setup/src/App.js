import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
    const [loding, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };

    const fetchTours = async () => {
        setLoading(true);

        try {
            const responce = await fetch(url);
            const tours = await responce.json();

            setTours(tours);
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    if (loding) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>No tours left</h2>
                    <button className="btn" onClick={() => fetchTours()}>
                        Refresh
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App;

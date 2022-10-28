import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
    const [loding, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

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

    return (
        <main>
            <Tours />
        </main>
    );
}

export default App;

import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({
        show: true,
        msg: "111",
        type: "danger",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            // display allert
            showAlert(true, "please enter value", "danger");
        } else if (name && isEditing) {
            // EDIT
        } else {
            // SHOW ALERT
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
            };
            setList([...list, newItem]);
            setName("");
            // ADD ELEMENT
        }
    };

    const showAlert = (show = false, msg = "", type = "") => {
        setAlert({ show, msg, type });
    };

    return (
        <section className="section-center">
            <form className="crocery-form" onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} />}
                <h3>Grocery bud</h3>
                <div className="form-control">
                    <input
                        type="text"
                        className="grocery"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit" className="submit-btn">
                        {isEditing ? "edit" : "submit"}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className="grocery-container">
                    <List items={list} />
                    <button className="clear-btn">clear items</button>
                </div>
            )}
        </section>
    );
}

export default App;

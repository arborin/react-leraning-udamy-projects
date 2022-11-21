import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
    let list = localStorage.getItem("list");

    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        msg: "",
        type: "",
    });

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            // display allert
            showAlert(true, "please enter value", "danger");
        } else if (name && isEditing) {
            // EDIT
            setList(
                list.map((item) => {
                    if (item.id === editID) {
                        return { ...item, title: name };
                    }
                    return item;
                })
            );

            setName("");
            setIsEditing(false);
            setEditID(null);
        } else {
            // SHOW ALERT
            showAlert(true, "Item edded", "success");
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
            };
            setList([...list, newItem]);
            setName("");
            // ADD ELEMENT
        }
    };

    const clearLIst = () => {
        showAlert(true, "clear all list", "danger");
        setList([]);
    };

    const showAlert = (show = false, msg = "", type = "") => {
        setAlert({ show, msg, type });
    };

    const removeItem = (id) => {
        showAlert(true, "item removed", "danger");
        setList(
            list.filter((item) => {
                return item.id !== id;
            })
        );
    };

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    };

    return (
        <section className="section-center">
            <form className="crocery-form" onSubmit={handleSubmit}>
                {alert.show && (
                    <Alert {...alert} removeAlert={showAlert} list={list} />
                )}
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
                    <List
                        items={list}
                        removeItem={removeItem}
                        editItem={editItem}
                    />
                    <button className="clear-btn" onClick={clearLIst}>
                        clear items
                    </button>
                </div>
            )}
        </section>
    );
}

export default App;

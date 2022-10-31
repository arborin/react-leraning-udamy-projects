import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);

    return (
        <main>
            <div className="title">
                <h2>our menu</h2>
                <div className="underline"></div>

                <Categories />
                <Menu items={menuItems} />
            </div>
        </main>
    );
}

export default App;

import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState([]);

    const filterItems = (category) => {
        console.log(category);
        const newItems = items.filter((item) => {
            return item.category === category;
        });

        setMenuItems(newItems);
    };

    return (
        <main>
            <div className="title">
                <h2>our menu</h2>
                <div className="underline"></div>

                <Categories filterItems={filterItems} />
                <Menu items={menuItems} />
            </div>
        </main>
    );
}

export default App;

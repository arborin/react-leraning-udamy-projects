import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = ({ category }) => {
        console.log(category);
        if (category === "all") {
            setMenuItems(items);
            return true;
        }

        const newItems = items.filter((item) => {
            return item.category === category;
        });

        setMenuItems(newItems);
    };

    return (
        <section className="menu section">
            <div className="title">
                <h2>our menu</h2>
                <div className="underline"></div>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />
        </section>
    );
}

export default App;

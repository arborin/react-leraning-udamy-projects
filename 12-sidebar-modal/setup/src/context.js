import React, { useState, useContext } from "react";
import App from "./App";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        console.log("OPEN SIDEBAR");
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openModal = () => {
        console.log("Modal OPEN");
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AppContext.Provider
            value={{
                isModalOpen,
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                openModal,
                closeModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// CUSTOM HOOK
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

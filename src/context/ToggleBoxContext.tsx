import React, { createContext, useContext, useState, type ReactNode } from "react";

// Context Value Type
interface ToggleBoxContextType {
    isBlue: boolean;
    toggleBox: () => void;
}

// Create Context (store)
const ToggleBoxContext = createContext<ToggleBoxContextType | undefined>(undefined);

// Context Provider
export const ToggleBoxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [isBlue, setIsBlue] = useState<boolean>(false);

    const toggleBox = () => {
        setIsBlue((prev) => !prev);
    }

    return (
        // Context-Provider (Supplies values (state + functions))
        <ToggleBoxContext.Provider value={{ isBlue, toggleBox }}>
            {children}
        </ToggleBoxContext.Provider>
    );

};

// Custom hook (for easier use)
export const useToggleBox = (): ToggleBoxContextType => {
    // Context (for Consumers)
    const context = useContext(ToggleBoxContext);

    if (!context) {
        throw new Error("useToggle must be used inside ToggleProvider");
    }

    return context;
}

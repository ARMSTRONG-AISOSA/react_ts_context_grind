import React, { createContext, useContext, useState, type ReactNode } from "react";

// Context Value Type
interface CounterContextType {
    count: number;
    increase: () => void;
    decrease: () => void;
    reset: () => void;
}

// Create Context (store)
const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Context Provider
export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    // state
    const [count, setCount] = useState<number>(0);

    // Functions
    const increase = () => {
        setCount((prev) => prev + 1);
    }

    const decrease = () => {
        setCount((prev) => prev - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        // Returned Context-Provider (Supplies values (state + functions))
        <CounterContext.Provider value={{ count, increase, decrease, reset }}>
            {children}
        </CounterContext.Provider>
    )
}

// CustomHooks (for easier consumption)
export const useCounter = (): CounterContextType => {
    // Context (for consumption)
    const context = useContext(CounterContext);

    if (!context) {
        throw new Error("useCounter must be inside CounterContext-Provider");
    }

    return context;
}
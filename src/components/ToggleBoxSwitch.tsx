import React from 'react';
import { useToggleBox } from '../context/ToggleBoxContext';

const ToggleBoxSwitch: React.FC = () => {

    // Destructure custom useToggleBox
    const { isBlue, toggleBox } = useToggleBox();

    return (
        <div
            onClick={toggleBox}
            className={`mt-6 w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition ${isBlue ? "bg-blue-500" : "bg-gray-400"
                }`}
        >
            <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${isBlue ? "translate-x-8" : "translate-x-0"
                    }`}
            ></div>
        </div>
    )
}

export default ToggleBoxSwitch
import React from 'react';

// Types
interface ButtonProps {
    label: string;
    onClick: () => void;
    className: string;
}


const ButtonComponent: React.FC<ButtonProps> = ({ label, onClick, className}) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3  border-solid border-1 border-transparent text-white font-medium rounded-lg hover:border-gray-500  transition ${className}`}
            >
            {label}
        </button>
    )
}

export default ButtonComponent
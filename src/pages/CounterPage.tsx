import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import { useCounter } from '../context/CounterContext';

const CounterPage: React.FC = () => {

  // Counter Context Destructuring
  const {count, increase, decrease, reset} = useCounter();

  // Btn Config (Objects)
  const btnConfigs = [
    { label: "Decrease", onClick: decrease, className: "bg-blue-600 hover:bg-blue-900" },
    { label: "Reset", onClick: reset, className: "bg-red-600 hhover:bg-red-900" },
    { label: "Increase", onClick: increase, className: "bg-green-600 hover:bg-green-900" },
  ]


  return (
    <div className='flex-grow flex flex-col bg-gray-100 justify-center items-center'>
      <div className='text-3xl mb-6 flex gap-3'>
        <h2>Count: </h2>
        <h2 className='font-bold '>{count}</h2>
      </div>
      <div className='flex gap-4'>

        {/* Btns */}
        {btnConfigs.map((btnConfig, index) => (
          <ButtonComponent
            key={index}
            label={btnConfig.label}
            onClick={btnConfig.onClick}
            className={btnConfig.className}
          />
        ))}
      </div>
    </div>
  )
}

export default CounterPage
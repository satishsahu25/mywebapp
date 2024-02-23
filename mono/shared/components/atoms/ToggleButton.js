import React from 'react'
import 'globals.css';

const ToggleButton = () => {
  return (
    <label className='flex bg-gray-200 relative cursor-pointer w-16 h-8 rounded-full'>
        <input type='checkbox' id='check' className='sr-only peer'/>
        <span className='w-2/5 h-4/5 bg-gray-500 absolute rounded-full left-1 top-1 peer-checked:bg-green-600 peer-checked:left-8 transition-all'/>
    </label>
  )
}

export default ToggleButton

'use client';
import React, { useState } from 'react';
const dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Add your pronouns');
  const handleClick = () => {
    setOpen(!open);
  };
  const handleOptionClick = (pronoun) => {
    setSelected(pronoun);
    setOpen(false);
  };
  return (
    <div
      className=" bg-white w-[100%] px-4 py-3 rounded-2xl border border-gray-500 relative -z-10"
      onClick={handleClick}
    >
      {selected}
      {open && (
        <div className="bg-white cursor-pointer w-[100%] absolute top-12 left-0 rounded-2xl px-4 py-3 border z-10">
          <p onClick={() => handleOptionClick('he/him')}>he/him</p>
          <p onClick={() => handleOptionClick('she/her')}>she/her</p>
          <p onClick={() => handleOptionClick('they/them')}>they/them</p>
        </div>
      )}
    </div>
  );
};

export default dropdown;

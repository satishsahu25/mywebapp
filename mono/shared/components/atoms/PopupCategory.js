'use client';
import React, { useState } from 'react';
import 'globals.css';
import PropTypes from 'prop-types';

const styleClassess = {
  default:
    'bg-gray-100 border-[1px] border-gray-500 px-5 py-[2px] rounded-full cursor-pointer w-fit whitespace-nowrap text-gray-500',
  select:
    'bg-blue-500 border-[1px] border-blue-600 px-5 py-[2px] rounded-full cursor-pointer w-fit whitespace-nowrap text-white',
};

const PopupCategory = ({ category, onClick }) => {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
    onClick(!selected);
  };
  return (
    <div
      onClick={handleClick}
      className={
        selected ? `${styleClassess['select']}` : `${styleClassess['default']}`
      }
    >
      {category}
    </div>
  );
};

PopupCategory.propTypes = {
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

PopupCategory.defaultProps = {
  category: 'category name',
  onClick: () => {},
};

export default PopupCategory;

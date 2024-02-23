'use client';
import React from 'react';
import 'globals.css';
import PropTypes from 'prop-types';

const styleClassess = {
  default:
    'bg-gray-100 border-[1px] border-gray-500 px-5 py-[2px] rounded-full cursor-pointer w-fit text-gray-500',
  select:
    'bg-blue-500 border-[1px] border-blue-600 px-5 py-[2px] rounded-full cursor-pointer w-fit text-white',
};

const chiplanguage = ({ category, isselected }) => {
  return (
    <div
      iisselectedsSelected={isselected}
      className={
        isselected
          ? `${styleClassess['select']}`
          : `${styleClassess['default']}`
      }
    >
      {category}
    </div>
  );
};
chiplanguage.protoType = {
  category: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};
chiplanguage.defaultProps = {
  category: 'category name',
  isSelected: false,
};

export default chiplanguage;

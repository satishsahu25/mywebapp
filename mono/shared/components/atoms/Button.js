import React from 'react';
import 'globals.css';
import PropTypes from 'prop-types';
import Image from 'next/image';

const styleClassess = {
  button:
    'bg-black hover:bg-gray-700 text-white font-semibold px-4 py-2 text-sm rounded-full',
  btnInactive:
    ' bg-[#efefef] text-[#7f7f7f]  font-semibold px-4 py-2 text-sm rounded-full',
  btnActive:
    ' bg-[#0f1419] text-[#ffffff]  font-semibold px-4 py-2 text-sm rounded-full',
  nothing:
    'bg-white text-white font-bold py-2 px-4 rounded-full flex gap-3 items-center border border-gray-100 text-black',
  primary:
    'bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
  secondary:
    'bg-gray-200 hover:text-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full w-fit',
  success:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full',
  info: 'bg-gray-200 hover:bg-gray-700 text-white font-bold py-1 text-base px-6 rounded-full w-fit h-auto',
  follow:
    'bg-white hover:bg-gray-900 hover:text-white font-semibold border py-2 px-4 text-sm rounded-full',
};

const Button = ({ label, disabled, style, imgSrc, onClick }) => {
  return (
    <>
      <button
        disabled={disabled}
        className={`${styleClassess[style]}`}
        onClick={onClick}
      >
        {imgSrc && <Image src={imgSrc} alt={''} width={20} height={20} />}
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  imgSrc: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.oneOf([
    'button',
    'nothing',
    'primary',
    'secondary',
    'success',
    'warning',
    'info',
    'follow',
    'danger',
    'btnInactive',
    'btnActive',
  ]),
};

Button.defaultProps = {
  style: 'button',
};

export default Button;

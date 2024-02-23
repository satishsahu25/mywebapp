import React from 'react';
import PropTypes from 'prop-types';
const styleClassess = {
  default: 'text-base font-normal',
  heading: 'text-xl font-bold',
  'room-text': 'text-2xl font-bold',
  'dropdown-text': 'text-[17px] font-bold',
  'sign up with google': 'text-[16px] font-bold',
  'signup text': 'text-[12px] font-semibold text-gray-400',
  'signup heading': 'text-[20px] font-bold',
  'follow-text1': 'text-[12px] font-bold',
  'follow-text2': 'text-[12px] font-semibold',
  'hub-time': 'text-[10px] font-bold',
  'slider-props': 'text-[15px] font-bold',
  'slider-props2': 'text-[15px] font-bold text-blue-500',
  'myspace-name': 'text-[14px] font-bold',
  'myspace-time': 'text-[10px] font-bold text-gray-400',
  'expert-tag': 'text-[11px] font-semibold text-gray-400',
  'chat-head': 'text-3xl font-bold',
  'create1 room': 'text-[37px] font-bold text-gray-400',
  'create2-text': 'text-[16px]',
  'button-text': 'text-lg font-bold',
  'button-text2': 'text-xl font-bold text-white',
  'create-text3': 'text-xl font-bold text-blue-400',
  'section-following': 'text-xs font-semibold',
  'create-hub': 'text-[20px] font-bold text-blue-500',
  'mainslider-title': 'text-3xl font-bold text-center',
  'mainslider-desc': 'text-xl font-semibold text-center text-gray-700',
  'live':'bg-red-500 rounded-md px-1 text-white w-fit text-xs'
};
const Text = ({ label, style }) => {
  const textClasses = `${styleClassess[style]}`;
  return <div className={textClasses}>{label}</div>;
};
Text.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
Text.defaultProps = {
  style: 'default',
};

export default Text;

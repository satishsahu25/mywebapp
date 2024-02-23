'use client';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
const TabLayout = ({
  tabs,
  tabContent,
  flexStyle,
  flexStyle1,
  tabcontentStyle,
  tabStyle,
  tabBorderStyle,
}) => {
  const [selected, setSelected] = useState(1);
  const tabShown = tabContent.filter((content) => content.id === selected);
  return (
    <div className={`flex  ${flexStyle}`}>
      <div className={`flex justify-center ${tabStyle}  ${flexStyle1}`}>
        {tabs.map((tab) => {
          return (
            <div
              key={tab.id}
              className={`p-4  m-2 cursor-pointer whitespace-nowrap ${
                selected === tab.id ? `${tabBorderStyle}` : ''
              }`}
              onClick={() => setSelected(tab.id)}
            >
              {tab.data}
            </div>
          );
        })}
      </div>
      {tabShown.map((data) => {
        return (
          <div className={` ${tabcontentStyle}  `}>{data.content}</div>
        );
      })}
    </div>
  );
};

TabLayout.propTypes = {
  tabs: PropTypes.array.isRequired,
  tabContent: PropTypes.array.isRequired,
  flexStyle: PropTypes.string,
  flexStyle1: PropTypes.string,
  tabcontentStyle: PropTypes.string,
  tabStyle: PropTypes.string,
  tabBorderStyle: PropTypes.string,
};
TabLayout.defaultprops = {
  flexStyle: 'flex-col',
  flexStyle1: 'flex-row',
  tabcontentStyle: 'bg-gray-300 w-full',
  tabStyle: '',
  tabBorderStyle: '',
};
export default TabLayout;

import React from 'react';
import ToggleButton from '../atoms/ToggleButton';
import Text from '../atoms/Text';
import PropTypes from 'prop-types';

const ToggleCreateOption = ({ optionTitle, optionDesc }) => {
  return (
    <div className="flex items-center gap-5">
      <ToggleButton />
      <div>
        <Text label={optionTitle} style='slider-props'/>
        <Text label={optionDesc}/>
      </div>
    </div>
  );
};

ToggleCreateOption.propTypes = {
    optionTitle: PropTypes.string,
    optionDesc: PropTypes.string
}

ToggleCreateOption.defaultProps = {
    optionTitle: 'Option Title',
    optionDesc: 'Option description'
}

export default ToggleCreateOption;

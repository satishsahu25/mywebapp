import React from 'react';
import Text from 'shared/components/atoms/Text';
import ToggleButton from 'shared/components/atoms/ToggleButton';
const EnableDiscovery = () => {
  return (
    <div className="flex justify-between w-[100%]">
      <Text label="Enable Discovery" style="button-text" />
      <ToggleButton />
    </div>
  );
};

export default EnableDiscovery;

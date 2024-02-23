import React from 'react';
import Image from 'next/image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import PropTypes from 'prop-types';
import ic_user_defolt_avator from 'shared/assets/ic_user_defolt_avator.svg';
const FollowSuggestion = ({ imgSrc, gap, label1, label2, style }) => {
  return (
    <div className={`flex gap-5 p-5 items-center  w-[100%]`}>
      <Image src={imgSrc} width={45} height={45} alt="user" />
      <div className={`flex ${gap} justify-between w-[100%]`}>
        <div className={`flex flex-col `}>
          <Text label={label1} style="follow-text1" />
          <Text label={label2} style="follow-text2" />
        </div>
        <div className="flex items-center justify-center">
          <Button label="Follow" style={style} />
        </div>
      </div>
    </div>
  );
};

FollowSuggestion.propTypes = {
  imgSrc: PropTypes.string,
  gap: PropTypes.string,
};

FollowSuggestion.defaultProps = {
  imgSrc: ic_user_defolt_avator,
};

export default FollowSuggestion;
